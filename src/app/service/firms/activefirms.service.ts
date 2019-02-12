import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { IActiveFirms } from 'src/app/interface/IActiveFirms';
import { ErrorlogService } from 'src/app/shared/ErrorLog/errorlog.service';

@Injectable({
  providedIn: 'root'
})
export class ActivefirmsService {
  private activeFirmsUrl='https://api.iextrading.com/1.0/stock/market/list/infocus';
  constructor(private _http:HttpClient,private errorLog:ErrorlogService) { }

  getActiveFirms():Observable<IActiveFirms[]>{
    return this._http.get<IActiveFirms[]>(this.activeFirmsUrl).pipe(tap(_=> console.log("Active Firms Fetched"),catchError(
      this.errorLog.handleError('getActiveFirms',[])
    )));
  }
}
