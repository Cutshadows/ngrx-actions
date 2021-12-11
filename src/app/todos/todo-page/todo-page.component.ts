import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as acciones from '../todo.actions';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  completado:boolean=false;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(){
    this.completado=!this.completado;
    this.store.dispatch(acciones.toggleAll({completado:this.completado}));
  }

}
