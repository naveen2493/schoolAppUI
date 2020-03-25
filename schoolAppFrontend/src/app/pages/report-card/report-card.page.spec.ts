import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportCardPage } from './report-card.page';

describe('ReportCardPage', () => {
  let component: ReportCardPage;
  let fixture: ComponentFixture<ReportCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
