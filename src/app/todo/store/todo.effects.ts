import { Actions, ofType, createEffect} from '@ngrx/effects';
import * as todoActions from './todo.actions';
import {tap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material";

@Injectable()
export class TodoEffects {
    showDetails = createEffect(() => this.actions$.pipe(
        ofType(todoActions.todoAdd),
        tap((action) => this.openSnackBar(action.payload.todo.title + ' wurde hinzugefügt'))
    ), {dispatch: false});

    constructor(private actions$: Actions, private snackBar: MatSnackBar) {}

    private openSnackBar(message: string) {
        this.snackBar.open(message, 'close', {
            duration: 2000,
        });
    }
}
