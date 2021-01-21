import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardscannerPage } from './cardscanner.page';

describe('CardscannerPage', () => {
  let component: CardscannerPage;
  let fixture: ComponentFixture<CardscannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardscannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardscannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
