import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authResponse, payload } from '../common/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  loginUser(payload: payload) {
    return this._http.post<authResponse>(
      'http://localhost:3000/api/login-user',
      payload
    );
  }

  loginLibrarian(payload: payload) {
    return this._http.post<authResponse>(
      'http://localhost:3000/api/login-librarian',
      payload
    );
  }
}
