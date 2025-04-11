import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'add', component: TodoAddComponent },
];
