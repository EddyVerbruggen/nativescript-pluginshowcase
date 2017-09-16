import { Component, NgZone, OnInit, ViewContainerRef } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { SpeakOptions, TNSTextToSpeech } from "nativescript-texttospeech";
import { SpeechRecognition, SpeechRecognitionTranscription } from "nativescript-speech-recognition";
import { alert } from "tns-core-modules/ui/dialogs";
import { available as emailAvailable, compose as composeEmail } from "nativescript-email";
import * as Calendar from "nativescript-calendar";
import * as Camera from "nativescript-camera";
import * as SocialShare from "nativescript-social-share";
import { ImageSource } from "tns-core-modules/image-source";
import { isIOS } from "tns-core-modules/platform";

@Component({
  selector: "page-speech",
  moduleId: module.id,
  templateUrl: "./speech.component.html",
  styleUrls: ["speech-common.css"],
  animations: [
    trigger("from-bottom", [
      state("in", style({
        "opacity": 1,
        transform: "translateY(0)"
      })),
      state("void", style({
        "opacity": 0,
        transform: "translateY(20%)"
      })),
      transition("void => *", [animate("1600ms 700ms ease-out")])
    ]),
    trigger("fade-in", [
      state("in", style({
        "opacity": 1
      })),
      state("void", style({
        "opacity": 0
      })),
      transition("void => *", [animate("800ms 2000ms ease-out")])
    ]),
    trigger("scale-in", [
      state("in", style({
        "opacity": 1,
        transform: "scale(1)"
      })),
      state("void", style({
        "opacity": 0,
        transform: "scale(0.9)"
      })),
      transition("void => *", [animate("1100ms ease-out")])
    ])
  ]
})
export class SpeechComponent extends AbstractMenuPageComponent implements OnInit {
  private text2speech: TNSTextToSpeech;
  private speech2text: SpeechRecognition;
  microphoneEnabled: boolean = false;
  recording: boolean = false;
  lastTranscription: string = null;
  spoken: boolean = false;
  showingTips: boolean = false;
  recognizedText: string;
  private recordingAvailable: boolean;

  // @ViewChild("recordButton") recordButton: ElementRef;

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService,
              private zone: NgZone) {
    super(menuComponent, vcRef, modalService);
  }

  ngOnInit(): void {
    // this creates a touch & hold gesture for the microphone button
    // const recordButton: Label = this.recordButton.nativeElement;
    // recordButton.on("tap", (args: GestureEventData) => {
    //   if (args["action"] === "down") {
    //     this.zone.run(() => this.startListening());
    //   } else if (args["action"] === "up") {
    //     this.zone.run(() => this.stopListening());
    //   }
    // });

    this.speech2text = new SpeechRecognition();
    this.speech2text.available().then(avail => {
      console.log(">> avail: " + avail);
      this.recordingAvailable = avail;
    });

    this.text2speech = new TNSTextToSpeech();

    setTimeout(() => {
      this.speech2text.requestPermission().then((granted: boolean) => {
        this.microphoneEnabled = granted;
        if (!isIOS) {
          Camera.requestPermissions();
        }
      });
    }, 1000);
  }

  toggleRecording(): void {
    this.recording = !this.recording;
    if (this.recording) {
      this.spoken = false;
      this.lastTranscription = null;
      this.startListening();
    } else {
      if (!this.spoken && this.lastTranscription !== null) {
        this.speak(this.lastTranscription);
      }
      this.stopListening();
    }
  }

  private startListening(): void {
    if (!this.recordingAvailable) {
      alert({
        title: "Not supported",
        message: "Speech recognition not supported on this device. Try a different device please.",
        okButtonText: "Oh, bummer"
      });
      this.recognizedText = "No support, sorry ☹️";
      return;
    }

    this.recording = true;
    this.speech2text.startListening({
      // locale: "en-US", // optional, uses the device locale by default
      // set to true to get results back continuously
      returnPartialResults: true,
      // this callback will be invoked repeatedly during recognition
      onResult: (transcription: SpeechRecognitionTranscription) => {
        this.zone.run(() => this.recognizedText = transcription.text);
        this.lastTranscription = transcription.text;
        if (transcription.finished) {
          this.spoken = true;
          setTimeout(() => this.speak(transcription.text), 300);
        }
      },
    }).then(
        (started: boolean) => {
          console.log(`started listening`);
        },
        (errorMessage: string) => {
          console.log(`Error: ${errorMessage}`);
        }
    );
  }

  private stopListening(): void {
    this.recording = false;
    this.speech2text.stopListening().then(() => {
      console.log("Stopped listening");
    });
  }

  private speak(text: string): void {
    let speakOptions: SpeakOptions = {
      text: text,
      speakRate: this.getSpeakRate(),
      pitch: 1, // 0.1 and 2 are rather funny :)
      // locale: "en-US", // optional, uses the device locale by default
      finishedCallback: () => {
        this.handleFollowUpAction(text.toLowerCase());
      }
    };
    this.text2speech.speak(speakOptions);
  }

  private getSpeakRate(): number {
    return isIOS ? 0.5 : 1.0;
  }

  private handleFollowUpAction(text: string): void {
    if (text.indexOf("schedule") > -1 && text.indexOf("today") > -1) {
      this.findTodaysEvents();

    } else if (text.indexOf("compose") > -1 && text.indexOf("mail") > -1) {
      let subject = "";
      let body = "";
      if (text.indexOf("subject") > -1) {
        let endOfSubject: number;
        if (text.indexOf("an message") > -1) {
          endOfSubject = text.indexOf("an message");
        } else if (text.indexOf("and message") > -1) {
          endOfSubject = text.indexOf("and message");
        } else if (text.indexOf("imessage") > -1) {
          endOfSubject = text.indexOf("imessage");
        }
        subject = text.substring(text.indexOf("subject") + 8, endOfSubject);
      }
      if (text.indexOf("message") > -1) {
        body = text.substring(text.indexOf("message") + 8);
      }
      this.composeAnEmail(subject, body);

    } else if (text.indexOf("share") > -1 && text.indexOf("self") > -1) {
      this.shareSelfie();
    }
  }

  composeAnEmail(subject: string, body: string): void {
    emailAvailable().then(avail => {
      if (!avail) {
        alert({
          title: "Not supported",
          message: "There's no email client configured. Try a different device please.",
          okButtonText: "Ah, makes sense.."
        });
        return;
      }

      composeEmail({
        subject: subject,
        body: body
      }).then((x) => {
        console.log(">> email result: " + x);
      });
    });
  }

  shareSelfie(): void {
    if (isIOS) {
      Camera.requestPermissions();
    }

    Camera.takePicture({
      width: 1000,
      height: 1000,
      cameraFacing: "front"
    }).then(imageAsset => {
      new ImageSource().fromAsset(imageAsset).then(imageSource => {
        SocialShare.shareImage(imageSource);
      });
    });
  }

  findTodaysEvents(): void {
    let now = new Date();
    let midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    console.log(midnight);
    Calendar.findEvents({
      startDate: now,
      endDate: midnight
    }).then(
        events => {
          let eventsSpoken = 0;
          events.map(ev => {
            if (!ev.allDay) {
              eventsSpoken++;
              let secondsFromNow = Math.round((ev.startDate.getTime() - new Date().getTime()) / 1000);
              let hours = Math.floor(secondsFromNow / (60 * 60));
              let minutes = Math.round((secondsFromNow / 60) % 60);
              this.text2speech.speak({
                text: `${ev.title} in ${hours > 0 ? hours + ' hour' + (hours > 1 ? 's' : '') + ' and ' : ''} ${minutes} minutes`,
                speakRate: this.getSpeakRate(),
              });
            }
          });
          if (eventsSpoken === 0) {
            this.text2speech.speak({
              text: `Your schedule is clear. Have a nice day.`,
              locale: "en-US",
              speakRate: this.getSpeakRate(),
            });
          }
        },
        function (error) {
          console.log("Error finding Events: " + error);
        }
    );
  }

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "Always wanted a fully trained parrot?\n\nRecord your voice in the device language and it will be shown and read back to you.\n\nBe sure to try the tips as well!",
        Array.of(
            new PluginInfo(
                "nativescript-texttospeech",
                "Text to Speech",
                "https://github.com/bradmartin/nativescript-texttospeech",
                "Make your app speak. Might be useful for disabled people 👀. Certainly useful for lazy ones."
            ),

            new PluginInfo(
                "nativescript-speech-recognition",
                "Speech Recognition",
                "https://github.com/EddyVerbruggen/nativescript-speech-recognition",
                "Speak to your app 👄. Useful for voice control and silly demo's 😄"
            ),

            new PluginInfo(
                "nativescript-calendar",
                "Calendar  🗓",
                "https://github.com/EddyVerbruggen/nativescript-calendar",
                "Create, Delete and Find Events in the native Calendar"
            ),

            new PluginInfo(
                "nativescript-camera",
                "Camera  🎥",
                "https://github.com/NativeScript/nativescript-camera",
                "Grab pictures from the device camera"
            ),

            new PluginInfo(
                "nativescript-email",
                "Email  ✉️",
                "https://github.com/EddyVerbruggen/nativescript-email",
                "Open an e-mail draft"
            ),

            new PluginInfo(
                "nativescript-social-share",
                "Social Share  ♻️️",
                "https://github.com/tjvantoll/nativescript-social-share",
                "Use the native sharing widget"
            )
        )
    );
  }
}
