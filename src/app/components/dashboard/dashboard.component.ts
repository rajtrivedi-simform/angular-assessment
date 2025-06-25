import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { bookResponse } from '../../common/types';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  booksList: Array<bookResponse> = [];

  constructor(private _userService: userService, private _router: Router) {}
  ngOnInit() {
    this._userService.getBooks().subscribe({
      next: (data) => {
        this.booksList = data;
      },
    });
  }

  logout() {
    if (typeof window != 'undefined') {
      localStorage.clear();
      this._router.navigateByUrl('/');
    }
  }
}
