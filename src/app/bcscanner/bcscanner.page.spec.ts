import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BcscannerPage } from './bcscanner.page';

describe('BcscannerPage', () => {
  let component: BcscannerPage;
  let fixture: ComponentFixture<BcscannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcscannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BcscannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
