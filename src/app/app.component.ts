import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'redux-app';
  contador:number;
  constructor(private store:Store<any>){
  }
  ngOnInit(): void {
    
  }
  incrementar(){
  }
  decrementar(){
  }
}
