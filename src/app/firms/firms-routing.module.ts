import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirmsComponent } from './firms.component';

const routes: Routes = [{
  path:'',
  component:FirmsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmsRoutingModule { }
