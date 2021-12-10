import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as actions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'redux-app';
  contador:number;
  constructor(private store:Store<AppState>){
    // this.contador=10;
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.select('contador').subscribe(contador=>this.contador=contador)
    
  }
  incrementar(){
    // this.contador++
    this.store.dispatch(actions.incrementar());
  }
  decrementar(){
    // this.contador--
    this.store.dispatch(actions.decrementar());

  }
}
