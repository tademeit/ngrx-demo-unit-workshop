import * as fromTodo from '../todo/store/todo.reducers';
import {ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";

export interface State {
    demo:  fromTodo.State
}

export const reducers: ActionReducerMap<State> = {
    demo: fromTodo.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return  (state: State, action: any): State => {
        const actionType = action ? action.type : 'undefined';
        if (console.group) {
            console.group('[Redux] Processing action: ' + actionType);
        }
        console.log('previous state', state);
        console.log('action', action);
        const result = reducer(state, action);
        console.log('next state', result);
        if (console.groupEnd) {
            console.groupEnd();
        }
        return result;
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];