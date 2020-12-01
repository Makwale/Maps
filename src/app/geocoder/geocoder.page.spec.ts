import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeocoderPage } from './geocoder.page';

describe('GeocoderPage', () => {
  let component: GeocoderPage;
  let fixture: ComponentFixture<GeocoderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocoderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeocoderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
