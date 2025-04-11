import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() deleted = new EventEmitter<void>();
  @Output() toggled = new EventEmitter<void>();

  constructor(private todoService: TodoService) {}

  toggleCompletion(): void {
    this.todoService.toggleTodoCompletion(this.todo.id);
    this.toggled.emit();
  }

  deleteTodo(): void {
    this.todoService.deleteTodo(this.todo.id);
    this.deleted.emit();
  }
}
