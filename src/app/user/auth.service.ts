import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  currentUser: IUser;

  loginUser(userName: string, password: string): Observable<any> {
    const url = '/api/login';
    const loginInfo = {
      username: userName,
      password
    };
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(url, loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser = { ...this.currentUser, firstName, lastName };
  }
}
