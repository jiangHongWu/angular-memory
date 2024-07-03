import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  protected map = new Map<string, Array<unknown>>();
  addData<T extends Array<unknown>>(key: string, value: T) {
    this.map.set(key, value);
  }

  delete(key: string) {
    this.map.delete(key);
  }
}
