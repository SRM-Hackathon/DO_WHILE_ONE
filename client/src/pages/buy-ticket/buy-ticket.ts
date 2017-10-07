import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GetBusInfoPage } from '../get-bus-info/get-bus-info';
import { YourJourneyPage } from '../your-journey/your-journey';
import { Toast } from '@ionic-native/toast';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner:BarcodeScanner, private toast: Toast) {
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
        if (dataArr[0] === 'b') {
          this.showBusInfo(dataArr[1]);
          return;
        }
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
          busCode: this.busCode,
          userStops: []
        };
        console.log(ticket);
        this.storage.boughtTickets.unshift(ticket);

        this.toast.show(`Ticket Purchase Successful !`, '5000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );

        /*
        this.navCtrl.pop();
        this.navCtrl.push(YourJourneyPage, {
          storage: this.storage,
        });
        */
      });
    }
  }

  showBusInfo(busCode) {
    this.navCtrl.pop();
    this.navCtrl.push(GetBusInfoPage, {
      storage: this.storage,
      busCode: busCode
    });
  }

}
