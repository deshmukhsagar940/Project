import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import { ToasterService } from './toaster.service';
import { RestApi } from '../api/rest-api';
import { Account } from '../models/account';

@Injectable()
export class AccountService {

  api = new RestApi();

  dataChange: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient, private toasterService:ToasterService) {}

  get data(): Account[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

 /** CRUD METHODS */
 getAllAccount(): void {
  this.httpClient.get<Account[]>(this.api.ACCOUNT_GET_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
}

addAccount(account: Account): void {
  this.httpClient.post(this.api.ACCOUNT_Add_URL, account).subscribe(data => {
    console.log("response is "+data);
    this.dialogData = data;
    console.log(this.dialogData);
    if(account.id!=null && account.id>0){
      this.toasterService.openSuccessSnackBar('Successfully updated','', 2000);
    }else{
      this.toasterService.openSuccessSnackBar('Successfully added','', 2000);
    }
  },
    (err: HttpErrorResponse) => {
      this.toasterService.openErrorSnackBar('Error occurred. Details: ' + err.name + ' ' + err.message,'', 8000);
    });
}

deleteAccount(id: number): void {
  console.log("account"+id);
  const url = `${this.api.ACCOUNT_DELETE_URL}/${id}`;
  console.log("url=="+url);
  this.httpClient.delete(url).subscribe(data => {
      this.toasterService.openSuccessSnackBar('Successfully deleted','ok', 1000);
    },
    (err: HttpErrorResponse) => {
      this.toasterService.openErrorSnackBar('Error occurred. Details: ' + err.name + ' ' + err.message,'', 8000);
    }
  );
}

getAccount(id:number):Observable<Account>{
  console.log("account"+id);
  const url = `${this.api.ACCOUNT_URL}/${id}`;
  return this.httpClient.get<Account>(url);
}


}
