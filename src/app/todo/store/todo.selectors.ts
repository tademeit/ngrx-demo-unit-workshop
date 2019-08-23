import {createFeatureSelector, createSelector} from "@ngrx/store";
import {State} from './todo.reducers';

export const demoSelector = createFeatureSelector<State>('demo');
export const selectTodos = createSelector(demoSelector, state => state.todos);