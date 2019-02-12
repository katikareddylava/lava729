import { Component, OnInit } from '@angular/core';
import { ITrend } from '../interface/ITrend';
import { HomeService } from '../service/home/home.service';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Heading:string='Trend';
  Text:string='Bar chart of the data';
  originalTrends:ITrend[]=[];
  trends:ITrend[]=[];
  graphDataSource: Object;
  graphData:any[]=[];
  filter:string="";

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getTrends();
  }

  getTrends():void {
    this.homeService.getTrends().subscribe(trends =>{
    this.trends=trends; 
    this.originalTrends=trends;
    this.trends.map(x=>{
      this.graphData.push({"label": new Date(x.lastUpdated).toLocaleDateString(),"value":x.performance})
    });
    this.graphDataSource = {
      chart: {
          "caption": "Sector",
          "xAxisName": "Date",
          "yAxisName": "Performance",
          "theme": "fusion",
          "labelDisplay": "rotate"
      },
      // Chart Data
      "data": this.graphData
    };
  });

  }
  sortData(sort: Sort) {
  const data = this.trends.slice();
  if (!sort.active || sort.direction === '') {
    this.trends = data;
    return;
  }

  this.trends = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'name': return this.compare(a.name, b.name, isAsc);
      case 'performance': return this.compare(a.performance, b.performance, isAsc);
      default: return 0;
    }
  });
  }

  ApplyFilter():void{
  this.trends = this.filter !== ""?this.originalTrends.filter((trends:ITrend)=>trends.name.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase())!==-1 || trends.performance.toString().indexOf(this.filter)!== -1):this.originalTrends;
  }

  compare(a: number | string, b: number | string, isAsc: boolean):number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}

