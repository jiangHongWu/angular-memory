import { Component, OnDestroy } from '@angular/core';
import { MapService } from './service/map.service';

class BigData extends Array {}

@Component({
  selector: 'setinterval-demo',
  template: ` <button (click)="addData($event)">添加数据</button> `,
})
export class MapDemo implements OnDestroy {
  constructor(protected readonly mapService: MapService) {}

  addData(event: Event) {
    this.mapService.addData('test_key', new BigData(1000000));
  }

  ngOnDestroy(): void {
    this.mapService.delete('test_key');
  }
}
