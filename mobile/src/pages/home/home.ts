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
      val = '';
      if (val === 'bus') {
        this.bus();
      } else if (val === 'passenger') {
        this.passenger();
      }
    });
  }

  passenger() {
    this.userType = 'passenger';
    this.pstorage.set('userType', this.userType);
    this.navCtrl.setRoot(PassengerHomePage, {
      storage: this.storage
    });
  }

  bus() {
    this.userType = 'bus';
    this.pstorage.set('userType', this.userType);
    this.navCtrl.setRoot(BusHomePage, {
      storage: this.storage
    });
  }

  ionViewWillEnter() {
    //this.navCtrl.push(PassengerHomePage);
  }
}
