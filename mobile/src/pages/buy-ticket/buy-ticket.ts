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
        formats: "QR_CODE,PDF_417",
        resultDisplayDuration: 0,
      }).then((data) => {
        this.ticketCode = data.text;
        let dataArr = this.ticketCode.split(';');
        console.log(dataArr);
        let ticket = {
          code: dataArr[0],
          time: new Date(parseInt(dataArr[1])),
          from: dataArr[2],
          to: dataArr[3]
        };
        console.log(ticket);
        this.storage.boughtTickets.push(ticket);
      });
    }
  }

}
