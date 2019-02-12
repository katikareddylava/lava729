import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { addPercentage, addCurrencyName } from './Pipes/common.pipe';
import { ErrorlogService } from './ErrorLog/errorlog.service';

@NgModule({
  declarations: [StarComponent,addPercentage,addCurrencyName],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[StarComponent,NgbModule,addPercentage,addCurrencyName]
})
export class SharedModule { 
   
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ErrorlogService ]
    };
  }

}
