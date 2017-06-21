import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ToDoService } from './service/to-do.service'
import { ToDoComponent } from './component/to-do.component'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, MaterialModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    ToDoComponent
  ],
  providers: [
    ToDoService
  ],
  exports: [
    ToDoComponent
  ],
})
export class ToDoModule { }
