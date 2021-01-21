import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardscannerPage } from './cardscanner.page';
// import { CardIO } from '@ionic-native/card-io/ngx';

const routes: Routes = [
  {
    path: '',
    component: CardscannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ /*CardIO*/ ]
})
export class CardscannerPageRoutingModule {}
