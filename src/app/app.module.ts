import { NgModule, Renderer2, RendererFactory2, ɵRender3NgModuleRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLink, RouterModule } from '@angular/router';
import { SetintervalDemo } from './setinterval-demo.component';
import { MapDemo } from './map-demo.component';
import { EventDemo } from './event-demo.component';
import { SubscribeDemo } from './subscribe-demo.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:"empty",
        redirectTo:"",
        component: class Empty {}
      },
      {
      path:"setinterval-demo",
      component: SetintervalDemo
    },
    {
      path:"map-demo",
      component:MapDemo
    },
    {
      path:"event-demo",
      component: EventDemo
    },
    {
      path:"subscribe-demo",
      component: SubscribeDemo
    },
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
