import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { ThrowStmt } from '@angular/compiler';
import { last } from 'rxjs/operators';

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'Andres',
      lastName: 'Clavijo'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateProfile(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
