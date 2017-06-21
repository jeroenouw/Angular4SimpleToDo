import { Component, OnInit } from '@angular/core';
import { ToDo } from '../model/to-do.model';
import { ToDoService } from '../service/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  newTodo: ToDo = new ToDo();

  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new ToDo();
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

}
