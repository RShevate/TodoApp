import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  private profileId:number = 0;


  constructor(  ) { }

  public setProfileId(id : number) {
    this.profileId = id;
  }

  public getProfileId(): number {
    return this.profileId;
  }

  

  // setData(user: User){
  //   this.user = user;
  // }

  // getData(){
  //   let temp = this.user;
  //   // this.clearData();
  //   return temp;
  // }


}
