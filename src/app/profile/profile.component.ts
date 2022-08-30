import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { TransferDataService } from '../transfer-data.service';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title='PROFILE';
  users:any;
  id=1;
  session:any;
  constructor(private userService:UserRegistrationService, private transferDataService: TransferDataService) { }

  ngOnInit(){
       let data:any = localStorage.getItem("session")
       this.session = JSON.parse(data);
       //get userDetail by userId
       let resp=this.userService.getUserDetails(this.session.userId);
       resp.subscribe((data:any)=> this.users=data)
  }
  
}
