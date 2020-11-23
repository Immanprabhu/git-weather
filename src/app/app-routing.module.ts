import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component'; 
import {LocationDetailsComponent} from './location-details/location-details.component'
const routes: Routes = [
  {
    path:'',redirectTo:'countries',pathMatch:'full'
  },
  {
    path:'countries',component:HomeComponent
  },
  {
    path:'cityDetails',component:LocationDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
