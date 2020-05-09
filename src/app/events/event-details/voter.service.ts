import { Injectable } from '@angular/core';
import { ISession } from '../shared';

@Injectable()
export class VoterService {
  userHasVoted(session: ISession, username: string): boolean {
    return session.voters.some(voter => voter === username);
  }

  addVoter(session: ISession, username: string): void {
    session.voters.push(username);
  }

  deleteVoter(session: ISession, username: string): void {
    session.voters = session.voters.filter(voter => voter !== username);
  }
}
