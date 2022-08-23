import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  title='ACTIONS';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 createaction(){
  this.router.navigate(['/createaction'])
 }
 action(){
  this.router.navigate(['/profile'])
 }
}
