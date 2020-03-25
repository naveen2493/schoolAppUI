import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamSyllabusPage } from './exam-syllabus.page';

describe('ExamSyllabusPage', () => {
  let component: ExamSyllabusPage;
  let fixture: ComponentFixture<ExamSyllabusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamSyllabusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamSyllabusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
