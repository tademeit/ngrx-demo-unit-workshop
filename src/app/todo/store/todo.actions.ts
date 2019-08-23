import {createAction, props} from '@ngrx/store';
import {Todo} from '../../models/todo.model';

export const todoAdd        = createAction('[TODO] Todo Add', props<{payload: {todo: Todo}}>());