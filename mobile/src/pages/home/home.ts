import { BusHomePage } from '../bus-home/bus-home';
import { PassengerHomePage } from '../passenger-home/passenger-home';
import { IssueTicketPage } from '../issue-ticket/issue-ticket';
import { BuyTicketPage } from '../buy-ticket/buy-ticket';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barData: String;
  storage: any;
  userType: string;

  constructor(public navCtrl: NavController, private barcodeScanner:BarcodeScanner, private pstorage: Storage) {
    this.barData = "";
    this.storage = {
      boughtTickets: [],
      issuedTickets: {},
    };

    let self = this;
    pstorage.get('userType').then((val) => {
      self.userType = val;
      if (val === 'bus') {
        this.bus();
      } else if (val === 'passenger') {
        this.passenger();
      }
    });
  }

  scanIt() {
    this.barcodeScanner.scan({
      formats : "QR_CODE,PDF_417",
      resultDisplayDuration: 0,
    }).then((data) => {
      this.barData = data.text;
    })
  }

  passenger() {
    this.userType = 'passenger';
    this.pstorage.set('userType', this.userType);
    this.navCtrl.push(PassengerHomePage, {
      storage: this.storage
    });
  }

  bus() {
    this.userType = 'bus';
    this.pstorage.set('userType', this.userType);
    this.navCtrl.push(BusHomePage, {
      storage: this.storage
    });
  }

  ionViewWillEnter() {
    //this.navCtrl.push(PassengerHomePage);
  }
}
