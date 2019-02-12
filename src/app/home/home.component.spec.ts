import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { MatSortModule, MatButtonModule,MatButtonToggleModule,MatInputModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../service/home/home.service';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme); 
import { HttpClientTestingModule } from '@angular/common/http/testing'


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[FusionChartsModule, MatSortModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        FormsModule,SharedModule,HttpClientTestingModule,BrowserAnimationsModule ],
        providers:[HomeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
