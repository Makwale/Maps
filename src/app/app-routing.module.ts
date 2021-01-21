import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'bcscanner',
    pathMatch: 'full'
  },
  {
    path: 'geocoder',
    loadChildren: () => import('./geocoder/geocoder.module').then( m => m.GeocoderPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'bcscanner',
    loadChildren: () => import('./bcscanner/bcscanner.module').then( m => m.BcscannerPageModule)
  },
  {
    path: 'cardscanner',
    loadChildren: () => import('./cardscanner/cardscanner.module').then( m => m.CardscannerPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
