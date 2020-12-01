import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeocoderPageRoutingModule } from './geocoder-routing.module';

import { GeocoderPage } from './geocoder.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeocoderPageRoutingModule,
    HttpClientModule
  ],
  declarations: [GeocoderPage]
})
export class GeocoderPageModule {}
