import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { TransferDataService } from '../transfer-data.service';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title='SignIn';
  //phoneNumber:any;
  constructor(private router: Router,private userService:UserRegistrationService, private transferDataService: TransferDataService) { }
  logins:any;
  msg:any;
  ngOnInit(){ 
  }

  SignUp(){
    this.router.navigate(['/signup'])
  }

  public SignIn(phoneNumber:any){
    //get user detail who has logged in
    let resp=this.userService.getLoginDetails(phoneNumber)
    resp.subscribe((data:any)=> { 
    this.logins=data;
    localStorage.setItem('session',JSON.stringify(this.logins));
    if(this.logins==null)
    {
        this.msg="Invalid User";
    }
    else{
      this.router.navigate(['/action'])
    }
  });
  
  }

}
