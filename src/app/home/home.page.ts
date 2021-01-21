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
  index:number = 0;

  // @ViewChild('map', {read: ElementRef, static: true, })
  // mapRef: ElementRef;

  constructor() {}

  ionViewDidEnter(){
    // this.map = this.showMap();

    // let marker = new mapboxgl.Marker({
    //   color:"red"
    // })
    // .setLngLat([28.02, -25.57])
    // .addTo(this.map);

    // let marker2 = new mapboxgl.Marker({color: "lightgreen"})
    // .setLngLat([30.50, -20.181])
    // .addTo(this.map);

    // let marker3 = new mapboxgl.Marker({color: "orange"})
    // .setLngLat([28.188, -25.7461])
    // .addTo(this.map);

  }

  // showMap(){
  //   mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWVsbWFrd2FsZSIsImEiOiJja2hsc3lmYWUyZzRnMnRsNnY2NWIyeGR6In0.1MGnfpXj_dV2QBO3SchfqA';
  //   let map = new mapboxgl.Map({
  //       container: 'map',
  //       style: 'mapbox://styles/mapbox/streets-v11',
  //       center: [25.34, -30.181],
  //       zoom: 4,
  //   });

  //   map.addControl(
  //   new mapboxgl.MapboxDirections({
  //     accessToken: mapboxgl.accessToken
  //   }),
  //     'bottom-left'
  //   );

  //   map.addControl(
  //   new mapboxgl.MapboxGeocoder({
  //     accessToken: mapboxgl.accessToken,
  //     countries: 'za',
  //     mapboxgl: mapboxgl,
    

  //   //var markerHeight = 50, markerRadius = 10, linearOffset = 25;
  //   var popupOffsets = {
  //    'top': [0, 0],
  //    'top-left': [0,0],
  //    'top-right': [0,0],
  //    'bottom': [0, -markerHeight],
  //    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  //    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  //    'left': [markerRadius, (markerHeight - markerRadius) * -1],
  //    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
  //    };

  //   var popup = new mapboxgl.Popup({offset: popupOffsets})
  //     .setLngLat([28.02, -25.57])
  //     .setHTML("<h1>Hello World!</h1>")
  //     .setMaxWidth("300px")
  //     .addTo(map);

  //   return map;
  // }

  // test(){
  //   let marker = new mapboxgl.Marker({
  //     color:"gray"
  //   })
  //   .setLngLat([25.34, -30.181])
  //   .addTo(this.map);

  //   this.map = this.showMap();

  // }

}
