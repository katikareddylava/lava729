import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IFirmDetails } from '../interface/IFirmDeatils';
import { FirmdetailsService } from '../service/firmdetails/firmdetails.service';

@Component({
  selector: 'app-firms-details',
  templateUrl: './firms-details.component.html',
  styleUrls: ['./firms-details.component.scss']
})
export class FirmsDetailsComponent implements OnInit {

firmName:string="";
sector:string="";
industry:string="";
website:string="";
ceo:string="";
price:any= 152.0;
ticker:string="";
description:string="";
imgUrl:any="";
currency:number=null;
FirmDetails:IFirmDetails=null;
  constructor(private route: ActivatedRoute, private location: Location,private firmDetailService:FirmdetailsService) { }

  ngOnInit() {
    this.getFirmDetails();
    this.getImageUrl();
    this.getCurrency();
  }

  getFirmDetails():void{
    this.firmDetailService.getFirmDetails().subscribe(firmDetailsData=>{
    this.firmName=firmDetailsData.companyName;
    this.sector=firmDetailsData.sector;
    this.industry=firmDetailsData.industry;
    this.website = firmDetailsData.website;
    this.ceo=firmDetailsData.CEO;
    this.ticker=firmDetailsData.symbol;
    this.description=firmDetailsData.description;
   })
  }

  getImageUrl():void{
    this.firmDetailService.getImageUrl().subscribe(imageData=>{
      this.imgUrl=imageData.url;
    })
  }
 
  getCurrency():void{
    this.firmDetailService.getCurrency().subscribe(currecyData=>{
      this.currency=this.price * currecyData.USD_INR;
    })
  }

  goBack(): void {
    this.location.back();
  }

}
