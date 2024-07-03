import { Component, OnDestroy, OnInit } from '@angular/core';

class BigData extends Array {}

@Component({
  selector: 'setinterval-demo',
  template: `setinterval`,
})
export class SetintervalDemo implements OnInit, OnDestroy {
  bigData = new BigData(1000000);
 
  timeId: ReturnType<typeof setInterval> | undefined;

  ngOnInit(): void {
    this.timeId = setInterval(() => {
      this;
    }, 2000);
  }
  
  ngOnDestroy(): void {
    clearInterval(this.timeId)
  }
}
