import { Actions, ofType, createEffect, Effect } from "@ngrx/effects";
import { of } from 'rxjs';
import { tap, switchMap, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { TodoActionTypes, AddAction, AddSuccessAction } from "./todo.actions";

@Injectable()
export class TodoEffects {
  @Effect({ dispatch: false })
  showDetails$ = this.actions$.pipe(
    ofType<AddAction>(TodoActionTypes.Add),
    tap(action =>
      this.openSnackBar(action.payload.todo.title + " wurde hinzugefügt")
    )
  );

  @Effect()
  sucesssTodo$ = this.actions$.pipe(
    ofType<AddAction>(TodoActionTypes.Add),
    switchMap((action) => of('Hallo').pipe(map((halloVar) => new AddSuccessAction({todo: {...action.payload.todo, title: halloVar}}))))
  )

  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}

  private openSnackBar(message: string) {
    this.snackBar.open(message, "close", {
      duration: 2000
    });
  }
}
