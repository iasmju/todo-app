import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { DateComponent } from './todo-card/date/date.component';
import { TaskComponent } from './todo-card/task/task.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TodoCardComponent,
    DateComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
