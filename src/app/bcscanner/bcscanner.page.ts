import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-bcscanner',
  templateUrl: './bcscanner.page.html',
  styleUrls: ['./bcscanner.page.scss'],
})
export class BcscannerPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {

	  	this.barcodeScanner.scan({
	  		showFlipCameraButton: true,
	  		showTorchButton : true,
	  		orientation: "landscape",
	  		disableAnimations: false
	  		
	  	}).then(barcodeData => {
	 		alert('Barcode data ' + barcodeData.text);
		}).catch(err => {
		    alert('Error ' + err.message);
		});
	}

}
