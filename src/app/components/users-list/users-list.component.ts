import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { BackendService } from '../../services/backend.service'; 
import { UserService } from '../../services/user.service';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DelDialogComponent } from '../del-dialog/del-dialog.component';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(
    private backendService: BackendService,
    private userService: UserService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.backendService.getUsers().subscribe((result: User[]) => {
      this.users = result;
    });
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
        this.users = users;
    });
  }
  
  openDialog(user: User): void {
    let dialogRef = this.dialog.open(DelDialogComponent, {
      data:{user}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == "Yes") {
        this.deleteUser(user.id);
      }
    });
  }

}
