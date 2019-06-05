import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  found: Boolean = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {


    this.userService.getByUserName(username).subscribe((users: User[]) => {

      for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          this.found = true;
          this.currentUserSubject.next(users[i]);
          localStorage.setItem('currentUser', JSON.stringify(users[i]));
          //console.log(this.found);
          break;

        }
        if (i == users.length) {
          throw Error('Username or password is incorrect');
        }
        

      }

    },
      err => {
        //this.found = false;
        return;
      });

    return this.http.post<any>('http://localhost:3000/loginLogs', { username, password })
      .pipe(map(user => {
        // console.log(this.found);
        //if (this.found) {

         // localStorage.setItem('currentUser', JSON.stringify(user));


       // }

        return user;
      }));

  }

  logout() {
    // remove user from local storage to log the user out

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.found = false;
  }

}
