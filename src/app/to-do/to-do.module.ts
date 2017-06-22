import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { MdButtonModule, MdCheckboxModule, MdInputModule, 
         MdListModule, MdIconModule, MaterialModule } from '@angular/material';

import { ToDoService } from './service/to-do.service'
import { ToDoComponent } from './component/to-do.component'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, 
    MdListModule, MdIconModule, MaterialModule,
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
