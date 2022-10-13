import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from "@angular/core";
import { debounceTime, Subject, Subscription } from "rxjs";


@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {

  @Output() debounceClick = new EventEmitter();
  clicks = new Subject();
  subscriptions: Subscription;

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe;
  }
  ngOnInit(): void {
    const debounceTimeInMs = 500;
    this.subscriptions = this.clicks.pipe(
      debounceTime(debounceTimeInMs)
    ).subscribe((value: any) => {

        this.debounceClick.emit(value);
    })
  }

  @HostListener('click', ['$event'])
  clickEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next( '');
  }



}
