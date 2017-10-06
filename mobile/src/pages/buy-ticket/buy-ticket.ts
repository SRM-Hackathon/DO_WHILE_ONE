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
  ticketTime: Date;
  ticketFrom: String;
  ticketTo: String;
  busCode: string;
  storage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner:BarcodeScanner) {
    this.ticketCode = '';
    this.storage = this.navParams.get('storage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyTicketPage');
    if (!this.ticketCode) {
      this.barcodeScanner.scan({
        formats: "QR_CODE",
        resultDisplayDuration: 0,
      }).then((data) => {
        this.ticketCode = data.text;
        let dataArr = this.ticketCode.split(';');
        console.log(dataArr);
        this.ticketCode = dataArr[0];
        this.ticketTime = new Date(parseInt(dataArr[1]));
        this.ticketFrom = dataArr[2];
        this.ticketTo = dataArr[3];
        this.busCode = dataArr[4];
        let ticket = {
          code: this.ticketCode,
          time: this.ticketTime,
          from: this.ticketFrom,
          to: this.ticketTo,
          busCode: this.busCode
        };
        console.log(ticket);
        this.storage.boughtTickets.unshift(ticket);
      });
    }
  }

}
