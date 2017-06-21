import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToDoModule } from './to-do/to-do.module';

import { MdButtonModule, MdCheckboxModule, MdInputModule, 
         MdListModule, MdIconModule, MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ToDoModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, 
    MdListModule, MdIconModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
