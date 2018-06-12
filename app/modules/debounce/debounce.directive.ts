/**
 * Inspired from: https://github.com/numsu/angular2-debounce/blob/master/src/debounce.directive.ts
 * If we need to update the modal value based on an action then that example shows how to do that.
 */
import { Input, OnDestroy, Output } from "@angular/core";
import { EventEmitter, ElementRef, OnInit, Directive } from "@angular/core";
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[debounce]'
})
export class DebounceDirective implements OnInit, OnDestroy {
  @Input() debounceDelay: number = 700;
  @Input() debounceFromEvent: string = "tap";
  @Output() debounceFunction: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const eventStream =
        fromEvent(this.elementRef.nativeElement, this.debounceFromEvent)
            .pipe(debounceTime(this.debounceDelay));

    try {
      eventStream.subscribe(input => this.debounceFunction && this.debounceFunction.emit(input));
    } catch (ignore) {
    }
  }

  ngOnDestroy(): void {
    this.debounceFunction = null;
  }
}
