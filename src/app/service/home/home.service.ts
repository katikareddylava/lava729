import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { ITrend } from 'src/app/interface/ITrend';
import { ErrorlogService } from 'src/app/shared/ErrorLog/errorlog.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private TrendUrl='https://api.iextrading.com/1.0/stock/market/sector-performance';
  constructor(private _http:HttpClient,private errorLog:ErrorlogService){
  
  }

  getTrends(): Observable<ITrend[]>{
    return this._http.get<ITrend[]>(this.TrendUrl).pipe(
      tap(
        _ => console.log('fetched trends'),catchError(this.errorLog.handleError('getTrends',[]))
        ));
  }
}
