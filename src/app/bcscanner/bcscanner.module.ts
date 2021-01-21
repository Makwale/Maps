import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BcscannerPageRoutingModule } from './bcscanner-routing.module';

import { BcscannerPage } from './bcscanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BcscannerPageRoutingModule
  ],
  declarations: [BcscannerPage]
})
export class BcscannerPageModule {}
