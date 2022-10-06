import { Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Account } from '../../../shared/models/account';
import { AccountService } from '../../../shared/services/account.service';
@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.scss']
})
export class AddaccountComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  myControl: FormControl = new FormControl();

  account = new Account();
  title ="Add Account";

  constructor(public dialogRef: MatDialogRef<AddaccountComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
            private accountService:AccountService,
            public dialog: MatDialog) { }

  ngOnInit() {
    if(this.data.id!=null && this.data.id>0){
      this.account = this.data;
      this.title="Update Account";
    }
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  public confirmAdd(): void {
    console.log(JSON.stringify(this.account));
    this.accountService.addAccount(this.account);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getCheckMessage(){}

}
