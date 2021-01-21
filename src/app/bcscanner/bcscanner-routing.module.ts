import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BcscannerPage } from './bcscanner.page';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

const routes: Routes = [
  {
    path: '',
    component: BcscannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ BarcodeScanner]
})
export class BcscannerPageRoutingModule {}
