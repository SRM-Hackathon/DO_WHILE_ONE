import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ValidateTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validate-ticket',
  templateUrl: 'validate-ticket.html',
})
export class ValidateTicketPage {

  ticketCode: string;
  isValid: boolean;
  message: string;
  storage: any;
  ticketTime: Date;
  ticketFrom: String;
  ticketTo: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner:BarcodeScanner) {
    this.ticketCode = '';
    this.storage = this.navParams.get('storage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidateTicketPage');
    if (!this.ticketCode) {
      this.barcodeScanner.scan({
        formats: "QR_CODE",
        resultDisplayDuration: 0,
      }).then((data) => {
        let scanArr = data.text.split(';');
        if (scanArr[0] === 't') {
          this.validateExternal(scanArr);
          return;
        }
        this.ticketCode = data.text;
        let ticket = this.storage.issuedTickets[this.ticketCode];

        if (ticket) {
          this.isValid = true;
          this.message = 'Valid Ticket!!!';
          this.ticketTime = ticket.time;
          this.ticketFrom = ticket.from;
          this.ticketTo = ticket.to;
        } else {
          this.isValid = false;
          this.message = 'Invalid Ticket !!!';
        }

      });
    }
  }

  validateExternal(scanArr) {
    if (scanArr[5] === this.storage.busCode) {
      this.isValid = true;
        this.message = 'Valid Ticket!!!';
        this.ticketTime = scanArr[2];
        this.ticketFrom = scanArr[3];
        this.ticketTo = scanArr[4];
    } else {
      this.isValid = false;
      this.message = 'Invalid Ticket !!!';
    }
  }

}
