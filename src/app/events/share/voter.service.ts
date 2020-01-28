import { Injectable } from '@angular/core';
import { ISession } from './event.model';

@Injectable()
export class VoterService {

  userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some(voter => voter === userName);
  }

  addVoter(session: ISession, userName: string) {
    session.voters.push(userName);
  }

  deleteVoter(session: ISession, userName: string) {
    session.voters = session.voters.filter( voter => voter !== userName);
  }
}
