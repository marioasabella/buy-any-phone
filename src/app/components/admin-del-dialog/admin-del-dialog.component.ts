import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Product } from "../../models/Product";

@Component({
  selector: 'app-admin-del-dialog',
  templateUrl: './admin-del-dialog.component.html',
  styleUrls: ['./admin-del-dialog.component.scss']
})
export class AdminDelDialogComponent implements OnInit {

  product: Product;

  constructor(public dialogRef: MatDialogRef<AdminDelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    this.product = this.data.product;
  }

  yes() {
    this.dialogRef.close("Yes");

  }

}
