import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'addPercentage'})
export class addPercentage implements PipeTransform{
    transform(value: any): any {
        return value +" %";
      }
}

@Pipe({name: 'addCurrencyName'})
export class addCurrencyName implements PipeTransform{
  transform(value: any): any {
      return value +".0 USD";
    }
}