import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-viewaccount',
  templateUrl: './viewaccount.component.html',
  styleUrls: ['./viewaccount.component.scss']
})
export class ViewaccountComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ViewaccountComponent>,
    @Inject(MAT_DIALOG_DATA) Account  : any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
