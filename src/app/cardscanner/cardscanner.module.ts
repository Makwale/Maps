import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardscannerPageRoutingModule } from './cardscanner-routing.module';

import { CardscannerPage } from './cardscanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardscannerPageRoutingModule
  ],
  declarations: [CardscannerPage]
})
export class CardscannerPageModule {}
