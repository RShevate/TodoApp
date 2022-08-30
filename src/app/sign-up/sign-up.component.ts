import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = <User>{};
  tittle= 'SignUp';
  constructor(private router: Router, private service:UserRegistrationService) { }
  
  ngOnInit(){
  }

  //register user
  public registerNow() 
  {
    this.service.doRegistration(this.user)
    .subscribe( data => {
      alert("User created successfully.");
    });
    this.router.navigate(['/login']);
  }
}
