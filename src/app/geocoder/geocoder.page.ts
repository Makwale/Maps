import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

export interface MapboxOutput {
  attribution: string;
  features: Feature[];
  geometry: Geometry[];
  query: [];
}

export interface Feature {
  place_name: string;
  geometry: string;

}
export interface Geometry {
  coordinates: string;
}

@Component({
  selector: 'app-geocoder',
  templateUrl: './geocoder.page.html',
  styleUrls: ['./geocoder.page.scss'],
})
export class GeocoderPage implements OnInit {
  key = 'pk.eyJ1IjoibWFudWVsbWFrd2FsZSIsImEiOiJja2hsc3lmYWUyZzRnMnRsNnY2NWIyeGR6In0.1MGnfpXj_dV2QBO3SchfqA';
  coordinates = [];
  addresses = [];
  list = [];
  searchRef;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  
  }

  search(ref){
    this.searchRef = ref;
    this.searchWord(ref.value).subscribe(
      (features: Feature[]) => {
        this.coordinates = features.map(feat => feat.geometry)
        this.addresses = features.map(feat => feat.place_name)
        this.list = features;
        console.log(this.addresses)
      }
    )
  }

  searchWord(query){
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    // tslint:disable-next-line:max-line-length
    return this.http.get(url + query + '.json?types=address&country=ZA&access_token='  + this.key )
      .pipe(map((res: MapboxOutput) => {
        return res.features;
      }));
  }

  select(value){
    this.searchRef.value = value;
    this.addresses = [];
    console.log(value);
  }

}
