import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSheetComponent } from './balance-sheet.component';
import { BalancesheetService } from '../service/balancesheet/balancesheet.service';
import { MatTableModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BalanceSheetComponent', () => {
  let component: BalanceSheetComponent;
  let fixture: ComponentFixture<BalanceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceSheetComponent ],
      imports:[MatTableModule,HttpClientTestingModule],
      providers:[BalancesheetService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
