import {createReducer, Action, on} from '@ngrx/store';
import {Todo} from '../../models/todo.model';
import * as TodoActions from './todo.actions';

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: [{
    id: 1,
    title: 'Mein erstes Todo',
    description: 'Bitte einkaufen'
  }]
}

export const todoReducers = createReducer(
  initialState,
  on(TodoActions.todoAdd, (state, action) => ({ ...state, todos: [...state.todos, action.todo] }))
)

export function reducer(state: State | undefined, action: Action) {
  return todoReducers(state, action);
}