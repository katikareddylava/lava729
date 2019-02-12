import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatSortModule ,MatButtonModule,MatButtonToggleModule,MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { SharedModule } from '../shared/shared.module';


// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSortModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,
    FusionChartsModule,
    SharedModule
  ]
})
export class HomeModule { }
