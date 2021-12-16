import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.models';
import { filtrosVarios } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosVarios): Todo[] {
      console.log(filtro)
      switch(filtro){
        case 'completados': return todos.filter(todo=>todo.completado);
        case 'pendientes': return todos.filter(todo=>!todo.completado);
        default: 
          return todos;
      }
    console.log(todos)
    return todos;
  }

}
