import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    protected readonly router:Router,
  ){    
  }

  get routes () {
    return this.router.config
  } 

  get activeUrl() {
      return this.router.url.substring(1)
  }
  title = 'memory-demo';
}
