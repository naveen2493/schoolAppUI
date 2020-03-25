import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttendencePage } from './attendence.page';

describe('AttendencePage', () => {
  let component: AttendencePage;
  let fixture: ComponentFixture<AttendencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttendencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
