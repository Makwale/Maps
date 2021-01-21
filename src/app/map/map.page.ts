import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

declare var mapboxgl: any;
declare var MapboxDirections; 

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
	map;
	lat:number;
	lon:number;
	direction;
	marker;
	geolocate;
	popup;
  

  constructor(public toastController: ToastController) { }

  ngOnInit() {
   	 
  
  }

  ionViewDidEnter(){
	
	const destination = new mapboxgl.LngLat(30.2960174,-24.3615738);

  	let currenctPos;

  	let distance: number;

  	mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWVsbWFrd2FsZSIsImEiOiJja2hsc3lmYWUyZzRnMnRsNnY2NWIyeGR6In0.1MGnfpXj_dV2QBO3SchfqA';
  	
  	this.map = new mapboxgl.Map({
	        container: 'map',
	        countries: 'za',
	        style: 'mapbox://styles/mapbox/dark-v10',
	        center: [28.1403, -25.7903],
	        zoom: 4,
	        bearingSnap: 90,
	        pitchWithRotate: true,
	        bearing: 0,
	        pitch: 85,
   	});

  	let div = window.document.createElement('div');

	div.innerHTML = 'Hello world!';
  	div.className = "popup";

   	this.popup = new mapboxgl.Popup({
   		anchor: "right",
   		className: "pop",
   		maxWidth: "400px",
   		
   	}).setDOMContent(div)

   	this.marker = new mapboxgl.Marker();

	this.marker.setLngLat([30.29098,-24.61194]);

	this.marker.setPopup(this.popup);

	this.marker.addTo(this.map);

  	this.geolocate = new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true,
			showAccuracyCircle: false,
	});

	this.map.addControl(this.geolocate);


	this.geolocate.on('geolocate',async (pos) => {
			
			this.marker.setLngLat([pos.coords.longitude, pos.coords.latitude])
 			this.marker.addTo(this.map);

 			currenctPos = new mapboxgl.LngLat(pos.coords.longitude, pos.coords.latitude);

 			distance = currenctPos.distanceTo(destination);


 			 if(distance <= 20){
	 			const toast = await this.toastController.create({
			      message: `Arrived at the place ${distance}`,
			      duration: 2000,
			      color: "success"
			    });
			    toast.present();
 			 }else if( distance > 20){
 			 	 const toast = await this.toastController.create({
			      message: `Left the place ${distance}`,
			      duration: 2000,
			      color: "dark"
			    });
			    toast.present();
 			 }

			
	});

	this.direction =  new MapboxDirections({
		      accessToken: mapboxgl.accessToken,
		      profile: "mapbox/driving",
		      alternatives: true,
		      congestion: true,
		      unit: "metric",
		      controls: {instructions: true},
		      showCompass: false,
	})

	this.map.addControl(this.direction,'bottom-left');


  	/*navigator.geolocation.getCurrentPosition( pos =>{
 		this.lat = pos.coords.latitude;
 		this.lon = pos.coords.longitude;

 		this.map = new mapboxgl.Map({
	        container: 'map',
	        countries: 'za',
	        style: 'mapbox://styles/mapbox/dark-v10',
	        center: [this.lon, this.lat],
	        zoom: 4,
   	 	});

   	 	this.map.addControl(new mapboxgl.NavigationControl());

 
		
   	 	this.direction =  new MapboxDirections({
		      accessToken: mapboxgl.accessToken,
		      profile: "mapbox/driving",
		      alternatives: true,
		      congestion: true,
		      unit: "metric",
		      controls: {instructions: false}
		  })

		this.map.addControl(this.direction,'bottom-left');

		this.map.addControl(new mapboxgl.FullscreenControl());

		this.geolocate = new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		});

		this.map.addControl(this.geolocate);
		let index = 0;
		this.geolocate.on('geolocate', pos => {
			console.log(pos);
			index++;
			this.marker.setLngLat([pos.coords.longitude, pos.coords.latitude])
		});


		
		

 	})
*/
  }

 createMarker(){
 	let pointA = new mapboxgl.LngLat(30.29098,-24.61194);
 	let pointB = new mapboxgl.LngLat(30.32946,-24.57291);
 	let distance = pointA.distanceTo(pointB)

 	console.log(distance);
 	//this.marker.setLngLat([this.lon, this.lat])
 	//this.marker.addTo(this.map);
 }



}
