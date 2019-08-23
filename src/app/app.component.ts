import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { Todo } from './models/todo.model';
import * as fromTodos from './todo/store/todo.reducers';
import * as TodoActions from './todo/store/todo.actions';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  todos$: Observable<Todo[]>;

  newTodo: Todo;

  constructor(private store$: Store<fromTodos.State>){
  }

  ngOnInit() {
    this.resetNewTodo();

    this.todos$ = this.store$.pipe(
      select('demo', 'todos')
    );
  }

  addTodo() {
    this.store$.dispatch(TodoActions.todoAdd({payload: {todo: this.newTodo}}));
    this.resetNewTodo();
  }

  private resetNewTodo() {
    this.newTodo = {
      title: '',
      description: ''
    }
  }

}
