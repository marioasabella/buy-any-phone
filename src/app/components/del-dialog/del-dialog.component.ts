import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-del-dialog',
  templateUrl: './del-dialog.component.html',
  styleUrls: ['./del-dialog.component.scss']
})
export class DelDialogComponent implements OnInit {

  user: User; 

  constructor(public dialogRef: MatDialogRef<DelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.user = this.data.user;
    
    console.log(this.data);
  }

  yes() {
    this.dialogRef.close("Yes");

  } 
}
