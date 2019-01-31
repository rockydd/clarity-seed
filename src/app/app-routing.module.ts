import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people/people.component';
import { ShipsComponent } from './ships/ships.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'people', component: PeopleComponent},
  { path: 'ships', component: ShipsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
