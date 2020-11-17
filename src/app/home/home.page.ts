import { Component, ElementRef, ViewChild } from '@angular/core';

//declare var google: any;
declare var mapboxgl: any;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: any;

  // @ViewChild('map', {read: ElementRef, static: true, })
  // mapRef: ElementRef;

  constructor() {}

  ionViewDidEnter(){
    console.log("Hello world");
    this.showMap();
  }

  showMap(){
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWVsbWFrd2FsZSIsImEiOiJja2hsc3lmYWUyZzRnMnRsNnY2NWIyeGR6In0.1MGnfpXj_dV2QBO3SchfqA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',

    });
  }

}
