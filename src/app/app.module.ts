import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//NGRX
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import {StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TodosModule } from './todos/todos.module';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodosModule
    // StoreModule.forRoot({contador:}),
    // StoreDevtoolsModule.instrument({
    //   maxAge:25,
    //   logOnly:environment.production,
    //   // autoPause: true, // para version ngrx 13
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
