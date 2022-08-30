import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-action-details',
  templateUrl: './action-details.component.html',
  styleUrls: ['./action-details.component.css']
})
export class ActionDetailsComponent implements OnInit {
  actions:any;
  id:any;
  title="ACTION DETAILS";
  constructor(private route: ActivatedRoute,private router:Router,private userService:UserRegistrationService) { }

  ngOnInit(){
    //Get action details by actionId
    this.id = this.route.snapshot.params['id'];
    let resp=this.userService.getActionDetails(this.id)
    resp.subscribe((data:any)=> this.actions=data)
    console.log(this.actions)  
  }
}
