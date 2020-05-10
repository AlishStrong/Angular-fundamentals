import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISession } from '../shared';

@Injectable()
export class VoterService {
  constructor(private http: HttpClient) { }

  userHasVoted(session: ISession, username: string): boolean {
    return session.voters.some(voter => voter === username);
  }

  addVoter(eventId: number, session: ISession, username: string): void {
    session.voters.push(username);
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
    this.http.post(url, {}, options)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  deleteVoter(eventId: number, session: ISession, username: string): void {
    session.voters = session.voters.filter(voter => voter !== username);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
    this.http.delete(url)
      .pipe(catchError(this.handleError('deleteVoter')))
      .subscribe();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
