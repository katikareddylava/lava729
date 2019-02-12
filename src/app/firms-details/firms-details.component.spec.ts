import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FirmsDetailsComponent } from './firms-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FirmdetailsService } from '../service/firmdetails/firmdetails.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FirmsDetailsComponent', () => {
  let component: FirmsDetailsComponent;
  let fixture: ComponentFixture<FirmsDetailsComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmsDetailsComponent ],
      imports:[FormsModule,SharedModule,HttpClientTestingModule],
      providers:[FirmdetailsService,Location,{ provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/activefirms' },{ provide:ActivatedRoute,useValue:fakeActivatedRoute  }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
