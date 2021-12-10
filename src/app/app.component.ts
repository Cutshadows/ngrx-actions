import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'redux-app';
  contador:number;
  // constructor(private store:Store<AppState>){
  // }
  ngOnInit(): void {
    
  }
  incrementar(){
  }
  decrementar(){
  }
}
