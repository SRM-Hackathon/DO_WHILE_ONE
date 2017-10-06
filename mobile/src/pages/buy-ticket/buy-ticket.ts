import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the BuyTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy-ticket',
  templateUrl: 'buy-ticket.html',
})
export class BuyTicketPage {

  ticketCode: String;
  storage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner:BarcodeScanner) {
    this.ticketCode = '';
    this.storage = this.navParams.get('storage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyTicketPage');
    if (!this.ticketCode) {
      this.barcodeScanner.scan({
        formats : "QR_CODE,PDF_417",
        resultDisplayDuration: 0,
      }).then((data) => {
        this.ticketCode = data.text;
        this.storage.boughtTickets.push({
          code: this.ticketCode,
          time: new Date(),
          from: 'Stop A',
          to: 'Stop C'
        });

      })
    }
  }

}
