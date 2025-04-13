import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // ✅ RouterModule includes both RouterOutlet and directives like routerLink
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ Fix typo: should be styleUrls (with an 's')
})
export class AppComponent {
  title = 'todo-app';
}
