import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//NGRX
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';

import { AppComponent } from './app.component';
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
    TodosModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
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
