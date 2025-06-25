import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { authResponse } from '../../../common/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {
    this._authService.loginUser({}).subscribe({
      next: (data: authResponse) => {
        if (typeof window != 'undefined') {
          localStorage.setItem('token', data.token);
          this._router.navigateByUrl('dashboard');
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
