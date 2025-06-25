import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authResponse, bookResponse } from '../common/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userService {
  constructor(private _http: HttpClient) {}

  getUser(): Observable<authResponse> {
    return this._http.get<authResponse>('http://localhost:3000/api/me');
  }

  getBooks(): Observable<Array<bookResponse>> {
    return this._http.get<Array<bookResponse>>(
      'http://localhost:3000/api/books'
    );
  }

  getBookById(id: number): Observable<bookResponse> {
    return this._http.get<bookResponse>(
      `http://localhost:3000/api/books/${id}`
    );
  }
}
