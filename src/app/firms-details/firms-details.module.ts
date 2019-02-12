import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { FirmsDetailsRoutingModule } from './firms-details-routing.module';
import { FirmsDetailsComponent } from './firms-details.component';
import { MatButtonModule,MatButtonToggleModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { DeferLoadModule } from '@trademe/ng-defer-load';

@NgModule({
  declarations: [FirmsDetailsComponent],
  imports: [
    CommonModule,
    FirmsDetailsRoutingModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    SharedModule ,
    DeferLoadModule 
  ]
})
export class FirmsDetailsModule { }
