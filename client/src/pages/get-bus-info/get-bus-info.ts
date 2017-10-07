import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StaticProvider } from '../../providers/static/static';
import { Md5 } from 'ts-md5/dist/md5';

import { ShowTicketPage } from '../show-ticket/show-ticket';
import { YourJourneyPage } from '../your-journey/your-journey';

/**
 * Generated class for the GetBusInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-bus-info',
  templateUrl: 'get-bus-info.html',
})
export class GetBusInfoPage {

  busCode: string;
  isValid: boolean;
  message: string;
  storage: any;
  stopsList: Array<string>;
  Math: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private provider: StaticProvider) {
    this.Math = Math;
    this.busCode = '';
    this.stopsList = [];
    this.storage = this.navParams.get('storage');
    let busCode = this.navParams.get('busCode');
    if (busCode) {
      this.busCode = busCode;
      this.showBusInfo();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetBusInfoPage');
    if (!this.busCode) {
      this.barcodeScanner.scan({
        formats: "QR_CODE",
        resultDisplayDuration: 0,
      }).then((data) => {
        let scanArr = data.text.split(';');
        if (scanArr.length > 1 && scanArr[0] === 'b') {
          this.busCode = scanArr[1];
          this.showBusInfo();
        } else {
          this.busCode = 'Invalid Code Scanned';
        }
      });
    }
  }

  showBusInfo() {
    this.provider.getBusStops(this.busCode).then((stopsList) => {
      this.stopsList = stopsList;
    }).catch(() => {
      this.busCode = 'Invalid Code Scanned';
    });
  }

  buyTicket(stop, index) {
    let cost = (Math.floor(index / 3) + 1) * 5;
    let code = Md5.hashStr(Math.random().toString(), false).toString();
    let from = 'Dr. T.P Ganeshan Audi...';
    let time = new Date();

    let ticketCode = 't;' + code + ';' + (time.getTime().toString())
      + ';' + from + ';' + stop
      + ';' + this.busCode;

    console.log(ticketCode);

    let userStops = [];
    for (let s of this.stopsList) {
      userStops.push(s);
      if (s === stop) {
        break;
      }
    }

    this.storage.boughtTickets.unshift({
      code: ticketCode,
      time: time,
      from: from,
      to: stop,
      busCode: this.busCode,
      userStops: userStops
    });

    this.navCtrl.pop();

    this.navCtrl.push(YourJourneyPage, {
      storage: this.storage,
    });
  }

}
