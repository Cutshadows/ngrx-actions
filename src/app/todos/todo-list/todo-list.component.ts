import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos:Todo[]=[];
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todos').subscribe(todos=>this.todos=todos);
  }

}
