import { Component, OnInit } from '@angular/core';
import { ToDo } from '../model/to-do.model';
import { ToDoService } from '../service/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
  }

}
