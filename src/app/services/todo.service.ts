import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private localStorageKey = 'todos';

  getTodos(): Todo[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  saveTodos(todos: Todo[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
  }

  addTodo(newTodo: Todo): void {
    const todos = this.getTodos();
    todos.push(newTodo);
    this.saveTodos(todos);
  }

  deleteTodo(id: number): void {
    const todos = this.getTodos().filter(todo => todo.id !== id);
    this.saveTodos(todos);
  }

  toggleTodoCompletion(id: number): void {
    const todos = this.getTodos().map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.saveTodos(todos);
  }
}
