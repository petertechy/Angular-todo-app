import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  todoTitle: string = '';

  constructor(private todoService: TodoService, private router: Router) {}

  addTodo(): void {
    const trimmedTitle = this.todoTitle.trim();
    if (!trimmedTitle) {
      alert('Todo title cannot be empty!');
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false
    };

    this.todoService.addTodo(newTodo);
    this.todoTitle = '';
    this.router.navigate(['/']);
  }
}
