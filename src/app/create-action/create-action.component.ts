import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Action } from '../action';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-create-action',
  templateUrl: './create-action.component.html',
  styleUrls: ['./create-action.component.css']
})

export class CreateActionComponent implements OnInit {
  action: Action = new Action();
  title= 'CREATE ACTION';

  formValue!: FormGroup
  constructor(private userService:UserRegistrationService,private formBuilder:FormBuilder) { }
  //users:User[]=[];
  users:any;
  session:any;

  ngOnInit(){
    this.formValue=this.formBuilder.group({
      actionTitle:[''],
      description:[''],
      assignedTo:[''],
      priority:['']
    })

    //Get userDetails
    let resp=this.userService.getUserName()
    resp.subscribe((data:any)=> this.users=data)
    console.log(this.users)
    let data:any = localStorage.getItem("session")
    this.session = JSON.parse(data);
  }

 createAction(){
  this.action.actionTitle=this.formValue.value.actionTitle;
  this.action.description=this.formValue.value.description;
  this.action.assignedTo = this.formValue.value.assignedTo;
  this.action.priority = this.formValue.value.priority;
  this.action.createdBy = this.session.userId;
  this.userService.createAction(this.action)
  .subscribe( data  => {
    alert("Action created successfully.");
    this.formValue.reset();
  });
  }
}
