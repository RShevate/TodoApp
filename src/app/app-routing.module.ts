import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActionComponent } from './create-action/create-action.component';
import { ActionComponent} from './action/action.component';
import { ProfileComponent} from './profile/profile.component';
import { SignUpComponent} from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ActionDetailsComponent } from './action-details/action-details.component';

const routes: Routes = [
   { path: 'createaction', component: CreateActionComponent },
   { path: 'action', component: ActionComponent},
   { path: 'profile', component: ProfileComponent},
   { path: "signup", component: SignUpComponent},
   { path: "login", component: LoginComponent},
   { path : "actiondetails", component:ActionDetailsComponent},
   { path: 'actiondetails/:id', component: ActionDetailsComponent },
   {path: '', redirectTo: '/signup', pathMatch: "full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
