import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { setFiltro } from '../../filtro/filtro.actions';
import * as actionsTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  filtroActual:actions.filtrosVarios='todos';
  filtros:actions.filtrosVarios[]=['todos', 'completados', 'pendientes'];
  pendientes:number=0;
  constructor(private readonly store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store
    // .select('filtro')
    // .subscribe(filtro=>this.filtroActual=filtro)
    this.store.subscribe(({todos, filtro})=>{
      this.filtroActual=filtro;
      this.pendientes=todos.filter(todo=>!todo.completado).length;
    })
  }

  cambiarFiltro(filtro:actions.filtrosVarios){
    this.store.dispatch(actions.setFiltro({filtro}))
  }

  limpiarTodos(){
    this.store.dispatch(actionsTodo.limpiarTodo());
  }

}
