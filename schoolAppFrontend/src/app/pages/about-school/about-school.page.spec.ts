import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutSchoolPage } from './about-school.page';

describe('AboutSchoolPage', () => {
  let component: AboutSchoolPage;
  let fixture: ComponentFixture<AboutSchoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSchoolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
