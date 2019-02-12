import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSort,MatTableDataSource } from '@angular/material';
import { ActivefirmsService } from '../service/firms/activefirms.service';

@Component({
  selector: 'app-firms',
  templateUrl: './firms.component.html',
  styleUrls: ['./firms.component.scss']
})
export class FirmsComponent implements OnInit {
  title:string='Active Stock Firms';
  requiredFirms:any[]=[];
  displayedColumns:string[]=['checkbox','companyName','symbol','latestPrice','change','edit'];
  constructor(private activeFirmsService:ActivefirmsService) { }
  
  ngOnInit() {
    this.getActiveFirms();
    this.activeFirmsDataSource.filterPredicate=function(data:any,filterValue:string):boolean{
      return data.companyName.toLowerCase().includes(filterValue) || data.symbol.toLowerCase().includes(filterValue);
    };
  }
  
  activeFirmsDataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  getActiveFirms():void{
  this.activeFirmsService.getActiveFirms().subscribe(activeFirms=>{
  activeFirms.map(x=>{
      this.requiredFirms.push({'companyName':x.companyName,'symbol': x.symbol,'latestPrice': x.latestPrice,'change':x.change})
    })
    this.activeFirmsDataSource.data=this.requiredFirms;
    this.activeFirmsDataSource.sort=this.sort;
  })
  }
  applyFilter(filterValue: string) {
    this.activeFirmsDataSource.filter= filterValue.trim().toLowerCase();
  }

}
