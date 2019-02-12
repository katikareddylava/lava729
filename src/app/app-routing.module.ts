import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path:'home',
  loadChildren:'./home/home.module#HomeModule'
  },{
    path:'activefirms',
    loadChildren:'./firms/firms.module#FirmsModule'
  },
  {
    path:'firmdetail',
    loadChildren:'./firms-details/firms-details.module#FirmsDetailsModule'
  },
  {
    path:'balancesheet',
    loadChildren:'./balance-sheet/balance-sheet.module#BalanceSheetModule'
  },
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
