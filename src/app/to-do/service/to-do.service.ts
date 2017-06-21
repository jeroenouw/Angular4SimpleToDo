import { Injectable } from '@angular/core';
import { ToDo } from '../model/to-do.model';

@Injectable()
export class ToDoService {
  lastId: number = 0;
  todos: ToDo[] = [];

  constructor() { }
  
  // Create/Post
  addTodo(todo: ToDo): ToDoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }
  
  // Read/Get
  getAllTodos(): ToDo[] {
    return this.todos;
  }

  getTodoById(id: number): ToDo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

}
