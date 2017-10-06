import { BusHomePage } from '../bus-home/bus-home';
import { PassengerHomePage } from '../passenger-home/passenger-home';
import { IssueTicketPage } from '../issue-ticket/issue-ticket';
import { BuyTicketPage } from '../buy-ticket/buy-ticket';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barData: String;

  constructor(public navCtrl: NavController, private barcodeScanner:BarcodeScanner) {
    this.barData = "";
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
    this.navCtrl.push(PassengerHomePage);
  }

  bus() {
    this.navCtrl.push(BusHomePage);
  }

  ionViewWillEnter() {
    //this.navCtrl.push(PassengerHomePage);
  }
}
