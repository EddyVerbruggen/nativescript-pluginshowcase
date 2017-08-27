import { Component, ElementRef, NgZone, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { SpeakOptions, TNSTextToSpeech } from "nativescript-texttospeech";
import { SpeechRecognition, SpeechRecognitionTranscription } from "nativescript-speech-recognition";
import { GestureEventData } from "tns-core-modules/ui/gestures";
import { Label } from "tns-core-modules/ui/label";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
  selector: "Speech",
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
  recognizedText: string;
  private recordingAvailable: boolean;

  @ViewChild("recordButton") recordButton: ElementRef;

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService,
              private zone: NgZone) {
    super(menuComponent, vcRef, modalService);
  }

  ngOnInit(): void {
    // this creates a touch & hold gesture for the microphone button
    const recordButton: Label = this.recordButton.nativeElement;
    recordButton.on("touch", (args: GestureEventData) => {
      if (args["action"] === "down") {
        this.zone.run(() => this.startListening());
      } else if (args["action"] === "up") {
        this.zone.run(() => this.stopListening());
      }
    });

    this.speech2text = new SpeechRecognition();
    this.speech2text.available().then(avail => {
      console.log(">> avail: " + avail);
      this.recordingAvailable = avail;
    });

    this.text2speech = new TNSTextToSpeech();

    setTimeout(() => {
      this.speech2text.requestPermission().then((granted: boolean) => {
        this.microphoneEnabled = granted;
      });
    }, 2000);
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
        if (transcription.finished) {
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
      speakRate: 0.5,
      // locale: "en-US", // optional, uses the device locale by default
      finishedCallback: () => {
        console.log("Speaking finished");
        // TODO now accept voice input again
      }
    };

    this.text2speech.speak(speakOptions).then();
  }


  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "Always wanted a fully trained parrot?\n\nRecord your voice (in the device language) by pressing the microphone button at the bottom. Any recognized text will be shown an read back to you.",
        Array.of(
            new PluginInfo(
                "nativescript-texttospeech",
                "Text to Speech",
                "https://github.com/bradmartin/nativescript-texttospeech",
                "Make your app speak. Might be useful for disabled people 👀. Certainly useful for lazy ones."),

            new PluginInfo(
                "nativescript-speech-recognition",
                "Speech Recognition",
                "https://github.com/EddyVerbruggen/nativescript-speech-recognition",
                "Speak to your app 👄. Useful for voice control and silly demo's."
            )
        )
    );
  }
}
