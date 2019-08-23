import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";
import * as fromTodos from './todo/store/todo.reducers';
import { MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule } from 
'@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule,
    StoreModule.forRoot({ demo: fromTodos.reducer })
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
