import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";
import * as fromTodos from './todo/store/todo.reducers';
import {MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule, MatSnackBarModule} from
        '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {EffectsModule} from "@ngrx/effects";
import {TodoEffects} from "./todo/store/todo.effects";

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule, MatSnackBarModule,
    StoreModule.forRoot({ demo: fromTodos.reducer }),
    EffectsModule.forRoot([TodoEffects])
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
