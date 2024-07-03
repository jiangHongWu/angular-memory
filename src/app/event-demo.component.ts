import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MapService } from './service/map.service';
import { environment } from '../environments/environment.prod';

class BigData extends Array {}

@Component({
  selector: 'event-demo',
  template: ` <div class="event-dom"><div></div></div> `,
})
export class EventDemo implements OnInit, OnDestroy {
  constructor(protected readonly elementRef: ElementRef<HTMLElement>) {}

  bigData = new BigData(1000000);

  ngOnInit(): void {
    this.elementRef.nativeElement.parentElement?.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    this.bigData.length;
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.parentElement?.removeEventListener('click', this.handleClick.bind(this));
  }
}
