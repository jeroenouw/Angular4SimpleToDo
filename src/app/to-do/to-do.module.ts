import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoService } from './service/to-do.service'
import { ToDoComponent } from './component/to-do.component'

@NgModule({
  imports: [
    CommonModule
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
