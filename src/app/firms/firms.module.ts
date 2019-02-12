import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatTableModule,
  MatToolbarModule ,
  MatSortModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule
} from '@angular/material';
import { FirmsRoutingModule } from './firms-routing.module';
import { FirmsComponent } from './firms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FirmsComponent],
  imports: [
    CommonModule,
    FirmsRoutingModule,
    MatInputModule,
  MatTableModule,
  MatToolbarModule ,
  MatSortModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  FormsModule
  ]
})
export class FirmsModule { }
