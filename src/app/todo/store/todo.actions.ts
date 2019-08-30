import {createAction, props} from '@ngrx/store';
import {Todo} from '../../models/todo.model';
import { Action } from '@ngrx/store';

export enum TodoActionTypes {
    Add = '[TODO] Todo Add',
    AddSuccess = '[TODO] Todo Add Successful'
    Remove = '[TODO] Todo Remove'
}

export class AddAction implements Action {
    type: TodoActionTypes = TodoActionTypes.Add;
    constructor(public payload: {todo: Todo}) {
    }
};
export class AddSuccessAction implements Action {
    type: TodoActionTypes = TodoActionTypes.Add;
    constructor(public payload: {todo: Todo}) {
    }
};

export class RemoveAction implements Action {
    type: TodoActionTypes = TodoActionTypes.Remove;
    constructor(public payload: {todo: Todo}) {
    }
};

export type TodoActions = AddAction
| AddSuccessAction
| RemoveAction;