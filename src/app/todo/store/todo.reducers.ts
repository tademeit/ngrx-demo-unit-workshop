import {createReducer, Action, on} from '@ngrx/store';
import {Todo} from '../../models/todo.model';
import { TodoActions, TodoActionTypes }from './todo.actions';

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: [{
    title: 'Mein erstes Todo',
    description: 'Bitte einkaufen'
  }]
};

export function reducer(state: State = initialState, action: TodoActions) {
  switch(action.type) {
    case TodoActionTypes.Add:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      }
      case TodoActionTypes.AddSuccess:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      }
  }
}
