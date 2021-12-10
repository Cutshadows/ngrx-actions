import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//NGRX
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import {StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({contador:contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:environment.production,
      // autoPause: true, // para version ngrx 13
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
