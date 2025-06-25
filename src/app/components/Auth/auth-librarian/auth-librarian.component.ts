import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { authResponse } from '../../../common/types';

@Component({
  selector: 'app-auth-librarian',
  imports: [],
  templateUrl: './auth-librarian.component.html',
  styleUrl: './auth-librarian.component.scss',
})
export class AuthLibrarianComponent {
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {
    this._authService.loginLibrarian({}).subscribe({
      next: (data: authResponse) => {
        if (typeof window != 'undefined') {
          localStorage.setItem('token', data.token);
          this._router.navigateByUrl('librarian');
        }
      },
      error: (error) => {
        if (error instanceof Error) {
          console.error(error);
        }
      },
    });
  }
}
