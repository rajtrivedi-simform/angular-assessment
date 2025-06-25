import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'digital-library';
  constructor(private _router: Router) {}

  loginAsLibrarian() {
    // Add navigation logic here
    this._router.navigateByUrl('login/librarian');
  }

  loginAsUser() {
    // Add navigation logic here
    this._router.navigateByUrl('login');
  }
}
