import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.models';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as acciones from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @ViewChild('inputFisico') txtInputFisico:ElementRef;
  @Input() todo: Todo;
  chckCompletado:FormControl;
  txtInput:FormControl;
  editando:boolean=false;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.chckCompletado=new FormControl(this.todo.completado);    
    this.txtInput=new FormControl(this.todo.texto, Validators.required); 
    
    this.chckCompletado.valueChanges.subscribe(valor=>{
      console.log(valor);
      this.store.dispatch(acciones.toggle({id:this.todo.id}))
    })
  }
  editar(){
    this.editando=true;
    this.txtInput.setValue(this.todo.texto)
    setTimeout(()=>{
      this.txtInputFisico.nativeElement.select();
    }, 1)
  }

  terminarEdit(){
    this.editando=false;
    if(this.txtInput.invalid){return;}
    if(this.txtInput.value===this.todo.texto){return;}

    this.store.dispatch(acciones.editar({id:this.todo.id, texto:this.txtInput.value}))
  }

  eliminarTodo(){
    this.store.dispatch(acciones.eliminar({id:this.todo.id}))
  }
}
