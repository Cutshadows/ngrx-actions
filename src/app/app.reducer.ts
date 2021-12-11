import { ActionReducerMap } from '@ngrx/store';
import { filtrosVarios } from './filtro/filtro.actions';
import { Todo } from './todos/models/todo.models';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';

export interface AppState{
    todos:Todo[],
    filtro:filtrosVarios
  }

  export const appReducers:ActionReducerMap<AppState>={
    todos: todoReducer,
    filtro:filtroReducer
  }