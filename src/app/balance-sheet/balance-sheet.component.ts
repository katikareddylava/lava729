import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BalancesheetService } from '../service/balancesheet/balancesheet.service';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss']
})
export class BalanceSheetComponent implements OnInit {

  
  constructor(private service:BalancesheetService) { }
  cashAndCashdataSource:any;
  shortTermdataSource:any;
  cashAndCashdisplayedColumns : string [] = ['reportDate','currentCash'];
  shortTremdisplayedColumns : string[] = ['reportDate','totalCash'];
  ngOnInit() {
    this.showBalanceData();
  }
  showBalanceData(){

    this.service.getBalanceData().subscribe(
      (data : any) => {
        data = data.financials;
          this.cashAndCashdataSource = new MatTableDataSource(data);
          this.shortTermdataSource = new MatTableDataSource(data);
      }
    )
  }

}
