import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToDoModule } from './to-do/to-do.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ToDoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
