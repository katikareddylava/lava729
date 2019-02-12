import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmsComponent } from './firms.component';
import { ActivefirmsService } from '../service/firms/activefirms.service';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatTableModule,
  MatToolbarModule ,
  MatSortModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule
} from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FirmsComponent', () => {
  let component: FirmsComponent;
  let fixture: ComponentFixture<FirmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmsComponent],
      imports:[MatInputModule,
        MatTableModule,
        MatToolbarModule ,
        MatSortModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,FormsModule,HttpClientTestingModule,BrowserAnimationsModule
      ],
      providers:[ActivefirmsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
