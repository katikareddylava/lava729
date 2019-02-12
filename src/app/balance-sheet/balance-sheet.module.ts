import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';
import { BalanceSheetComponent } from './balance-sheet.component';
@NgModule({
  declarations: [BalanceSheetComponent],
  imports: [
    CommonModule,
    BalanceSheetRoutingModule,
    MatTableModule
  ]
})
export class BalanceSheetModule { }
