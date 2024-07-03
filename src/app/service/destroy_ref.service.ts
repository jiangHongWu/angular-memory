import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DestroyRefService<T = unknown>
  extends Subject<T>
  implements OnDestroy
{
  ngOnDestroy(): void {
    this.next();
    this.complete();
  }
}
