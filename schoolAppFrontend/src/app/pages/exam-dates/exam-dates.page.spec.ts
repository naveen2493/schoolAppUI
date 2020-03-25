import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamDatesPage } from './exam-dates.page';

describe('ExamDatesPage', () => {
  let component: ExamDatesPage;
  let fixture: ComponentFixture<ExamDatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamDatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamDatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
