import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { bookResponse } from '../../common/types';

@Component({
  selector: 'app-librarian-dashboard',
  imports: [RouterLink],
  templateUrl: './librarian-dashboard.component.html',
  styleUrl: './librarian-dashboard.component.scss',
})
export class LibrarianDashboardComponent {
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
