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

  logout(): Observable<any> {
    this.currentUser = undefined;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/logout', {}, options);
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = data as IUser;
        }
      }))
      .subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser = { ...this.currentUser, firstName, lastName };
    const url = '/api/users/' + this.currentUser.id;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(url, this.currentUser, options);
  }
}
