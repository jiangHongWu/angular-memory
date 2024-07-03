import { Component, OnInit } from '@angular/core';
import { DestroyRefService } from './service/destroy_ref.service';
import { BehaviorSubject, Observable, Subject, interval } from 'rxjs';

class BigData extends Array {}

@Component({
  selector: 'subscribe-demo',
  template: `setinterval`,
  providers: [DestroyRefService],
})
export class SubscribeDemo implements OnInit {
  constructor(protected readonly destroyRef: DestroyRefService) {}

  bigData = new BigData(1000000);
  
  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.bigData.length;
    });
  }
}
