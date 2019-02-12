import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirmsDetailsComponent } from './firms-details.component'

const routes: Routes = [{
  path:'',
  component:FirmsDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmsDetailsRoutingModule { }
