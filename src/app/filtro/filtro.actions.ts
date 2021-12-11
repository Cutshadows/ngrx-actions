import { createAction, props } from '@ngrx/store';

export type filtrosVarios='todos'|'completados'|'pendientes';

export const setFiltro=createAction('[FILTRO] Set Filtro', props<{filtro:filtrosVarios}>());
