import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {CountryComponent} from './country/country.component';
import { IndiaUsaComponent } from './india-usa/india-usa.component';
import { AtlanticComponent } from './atlantic/atlantic.component';
import { PacificComponent } from './pacific/pacific.component';
import { MealComponent } from './meal/meal.component';
const routes: Routes=[
  { path:'',redirectTo:'india-usa',pathMatch:'full'},
 // { path:'CountryBro',component:CountryComponent},
  { path:'india-usa',component:IndiaUsaComponent
  , children:[
    {path:'atlantic',component:AtlanticComponent},
    {path: 'atlantic/:item',component:MealComponent},
    {path:'pacific',component:PacificComponent},
    {path: 'pacific/:item',component:MealComponent},
  ]}

] 

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CountryComponent,
    IndiaUsaComponent,
    AtlanticComponent,
    PacificComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
