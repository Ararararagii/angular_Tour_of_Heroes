import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heroes } from '../app/heroes/heroes';
import { Dashboard } from './dashboard/dashboard';
import { HeroDetail } from './hero-detail/hero-detail';

const routes: Routes = [
  {path:'heroes', component: Heroes},
  {path:'dashboard', component: Dashboard},
  {path:'detail/:id', component: HeroDetail},
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
