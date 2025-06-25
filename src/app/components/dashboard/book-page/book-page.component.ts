import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userService } from '../../../services/user.service';
import { bookResponse } from '../../../common/types';

@Component({
  selector: 'app-book-page',
  imports: [],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.scss',
})
export class BookPageComponent {
  bookId: number = 0;
  data = {};

  constructor(
    private _route: ActivatedRoute,
    private _userService: userService
  ) {}

  ngOnInit() {
    this._route.paramMap.subscribe({
      next: (data) => (this.bookId = parseInt(data.get('id') as string)),
    });

    this._userService.getBookById(this.bookId).subscribe({
      next: (data: bookResponse) => {
        this.data = data;
        console.log(data);
      },
    });
  }
}
