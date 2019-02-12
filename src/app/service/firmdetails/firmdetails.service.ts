import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFirmDetails } from 'src/app/interface/IFirmDeatils';
import { tap, catchError } from 'rxjs/operators';
import { IImage } from 'src/app/interface/IImage';
import { ErrorlogService } from 'src/app/shared/ErrorLog/errorlog.service';

@Injectable({
  providedIn: 'root'
})
export class FirmdetailsService {

  private FirmDetailsUrl='https://api.iextrading.com/1.0/stock/aapl/company';
  private ImageUrl='https://api.iextrading.com/1.0/stock/aapl/logo';
  private currencyUrl='https://free.currencyconverterapi.com/api/v6/convert?q=USD_INR&compact=ultra';
  constructor(private _http:HttpClient,private errorLog:ErrorlogService) { }

  getFirmDetails():Observable<IFirmDetails>{
    return this._http.get<IFirmDetails>(this.FirmDetailsUrl).pipe(tap(_=> console.log("Firm Details Fetched"),
    catchError(this.errorLog.handleError('getFirmDetails',[]))
    ));
  }
 
  getImageUrl():Observable<any>{
    return this._http.get<IImage>(this.ImageUrl).pipe(tap(_=> console.log("Image Fetched"),
    catchError(this.errorLog.handleError('getImageUrl',[]))
    ));
  }

  getCurrency():Observable<any>{
    return this._http.get<any>(this.currencyUrl).pipe(tap(_=> console.log("Currency Fetched"),
    catchError(this.errorLog.handleError('getCurrency',[]))
    ));

  }
}
