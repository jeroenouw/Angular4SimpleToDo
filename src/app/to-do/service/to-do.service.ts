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

  // Update/Put
  updateTodoById(id: number, values: Object = {}): ToDo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Delete
  deleteTodoById(id: number): ToDoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }
  
  // Complete
  toggleTodoComplete(todo: ToDo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
