import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarComponent ],
      imports:[NgbModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
