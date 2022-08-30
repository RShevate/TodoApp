import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  actions: any;
  //id=2;
  session:any;
  status='Pending';
  status1="Completed";
  title='ACTIONS';
  constructor(private router: Router, private userService:UserRegistrationService) { }

  ngOnInit(){
  }
  //Get pending taska Title
  public pendinglist() {
      let data:any = localStorage.getItem("session")
      this.session = JSON.parse(data);
      let resp=this.userService.getActionTitle(this.session.userId,this.status)
      resp.subscribe((data:any)=> this.actions=data)
  }

  //Get completed taska Title
  public completedlist() {
      let data:any = localStorage.getItem("session")
      this.session = JSON.parse(data);
      let resp=this.userService.getActionTitle(this.session.userId,this.status1)
      resp.subscribe((data:any)=> this.actions=data)
  }
  
  //route to createaction component
  createaction(){
    this.router.navigate(['/createaction'])
  }

  //route to profile component
  profile(){
    this.router.navigate(['/profile'])
  }

  //route to actiondetails component
  actionDetails(id:number){
    this.router.navigate(['actiondetails',id])
  }
}
