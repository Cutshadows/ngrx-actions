import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.models";
import { crear, editar, eliminar, toggle, toggleAll, limpiarTodo } from './todo.actions';

export const initialState:Todo[]=[
    new Todo('Salvar a la humanidad'),
    new Todo('Salvar a la Juana'),
    new Todo('Salvar a la iskia'),
    new Todo('Salvar al planeta'),
    new Todo('Vencer a Thanos'),
];

const _todoReducer=createReducer(initialState, 
        on(crear, (state, {texto})=>[...state, new Todo(texto)]),
        on(toggle, (state, {id})=>state.map(todo=>{
            if(todo.id===id){
                return{
                    ...todo,
                    completado:!todo.completado
                }
            }else{
                return todo;
            }
        })),
        on(editar, (state, {id, texto})=>state.map(todo=>{
            if(todo.id===id){
                return{
                    ...todo,
                    texto
                }
            }else{
                return todo;
            }
        })),
        on(eliminar, (state, {id})=>state.filter(todo=>todo.id!==id)),
        on(toggleAll, (state, {completado})=>state.map(todo=>{
            return{
                ...todo,
                completado:completado
            }
        })),
        on(limpiarTodo, state=>state.filter(todo=>!todo.completado)),
        
)

export function todoReducer(state, action){
    console.log(state)
    return _todoReducer(state, action)
}