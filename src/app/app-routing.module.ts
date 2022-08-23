import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActionComponent } from './create-action/create-action.component';
import { ActionComponent} from './action/action.component';
import { ProfileComponent} from './profile/profile.component';

const routes: Routes = [
   { path: 'createaction', component: CreateActionComponent },
   { path: 'action', component: ActionComponent},
   { path: 'profile', component: ProfileComponent},
   {path: '', redirectTo: '/action', pathMatch: "full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
