import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';  

import { AppComponent } from './app.component';
import { BasicCounterComponent } from './basic-counter/basic-counter.component';

/**
 * Default
 */
// @NgModule({
//   declarations: [
//     AppComponent,
//     BasicCounterComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

/**
 * Required for building elements
 */
@NgModule({
  declarations: [
    AppComponent,
    BasicCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    BasicCounterComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const counterElement = createCustomElement(BasicCounterComponent, {injector: this.injector});
    customElements.define('counter-element', counterElement);
  }
}

/**
 * Using `ngDoBootstrap` for serving our app
 */
// @NgModule({
//   declarations: [
//     AppComponent,
//     BasicCounterComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   entryComponents: [
//     AppComponent
//   ],
//   providers: [],
//   bootstrap: []
// })
// export class AppModule {
//   ngDoBootstrap(app) {
//     const componentElement = document.createElement('app-root');
//     document.body.appendChild(componentElement);
//     app.bootstrap(AppComponent);
//   }
// }
