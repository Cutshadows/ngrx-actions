import { createAction, props } from "@ngrx/store";

export const crear=createAction('[TODO] Crear Todo', props<{texto:string}>());
export const toggle=createAction('[TODO] Toggle Todo', props<{id:number}>());
export const editar=createAction('[TODO] Editar Todo', props<{id:number, texto:string}>());
export const eliminar=createAction('[TODO] Borrar Todo', props<{id:number}>());
export const toggleAll=createAction('[TODO] Toggle All Todo', props<{completado:boolean}>());
export const limpiarTodo=createAction('[TODO] Limpiar Todo');