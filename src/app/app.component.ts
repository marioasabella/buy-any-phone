import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';
import { Role } from './models/role';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BuyAnyPhone';
  //loggedIn: Boolean;
  currentUser: User;  

  constructor(private authenticationService: AuthenticationService){
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      //console.log(this.currentUser); 
    });
  }

  ngOnInit() {
    
  }
  

  ngDoCheck(){
   // this.loggedIn = this.authenticationService.found;
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
  }
    
}
