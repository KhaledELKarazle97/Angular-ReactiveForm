import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  { path: '',component: HomeComponent },
  {path:'login',component: HomeComponent},
  {path:'userdetails',component: HomeComponent},
  {path:'userdetails/:id/:title/:firstName/:lastName/:email/:phone',component:UserDetailsComponent},
  {path:'login/:id/:email',component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
