import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Action } from './action';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  //create user using post method
  public doRegistration(user:User)
  {
    return this.http.post<User>('http://localhost:8085/api/v1/user',user);
  }
  
  //Get User Details by userId
  public getUserDetails(id:any)
  {
      console.log(id);
      return this.http.get('http://localhost:8085/api/v1/user/'+id)
  }

  //Get User Details
  public getUserName()
  {
    return this.http.get('http://localhost:8085/api/v1/alluserNames');
  }

  //Get action Title by userId and status 
  public getActionTitle(id:any, status:String)
  {
    return this.http.get<Action>('http://localhost:8085/api/v1/title/'+id+'/'+status);
  }

  //Get Action Details by actionId
  public getActionDetails(id:any)
  {
    return this.http.get('http://localhost:8085/api/v1/action/'+id)
  }

  //get user detail by phoneNumber
  public getLoginDetails(phoneNumber:any) 
  {
    //console.log(id);
    return this.http.get('http://localhost:8085/api/v1/userlogin/'+phoneNumber)
  }
  
  public createAction(action:Action)
  {
    return this.http.post<Action>('http://localhost:8085/api/v1/action',action);
  }

}

