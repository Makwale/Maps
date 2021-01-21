import { Component, OnInit } from '@angular/core';

//import { CardIO } from '@ionic-native/card-io/ngx';


@Component({
  selector: 'app-cardscanner',
  templateUrl: './cardscanner.page.html',
  styleUrls: ['./cardscanner.page.scss'],
})
export class CardscannerPage implements OnInit {

  constructor(/*private cardIO: CardIO*/) { }

  ngOnInit() {
  	/*this.cardIO.canScan().then((res: boolean) => {
      if(res){
        let options = {
          requireExpiry: true,
          requireCVV: false,
          requirePostalCode: false
        };
        this.cardIO.scan(options);
      }
    });*/
  }

}
