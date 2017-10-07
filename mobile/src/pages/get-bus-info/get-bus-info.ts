import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StaticProvider } from '../../providers/static/static';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private provider:StaticProvider) {
    this.Math = Math;
    this.busCode = '';
    this.stopsList = [];
    this.storage = this.navParams.get('storage');
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

}
