import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { ErrorlogService } from 'src/app/shared/ErrorLog/errorlog.service';

@Injectable({
  providedIn: 'root'
})
export class BalancesheetService {

  private balanceSheetUrl='https://api.iextrading.com/1.0/stock/aapl/financials?period=annual';
  constructor(private _http:HttpClient,private errorLog:ErrorlogService){
  
  }
  getBalanceData(){
    return this._http.get(this.balanceSheetUrl).pipe(
      tap(
        _ => console.log('balancesheet data')
        ),catchError(this.errorLog.handleError('getBalanceData',[])));
  }
}
