import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
  
})
export class UserComponent implements OnInit {

  @Input() user: User;
  


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  

}
