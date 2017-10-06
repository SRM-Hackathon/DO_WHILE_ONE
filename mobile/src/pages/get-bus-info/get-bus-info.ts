import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
    this.busCode = '';
    this.storage = this.navParams.get('storage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetBusInfoPage');
    if (!this.busCode) {
      this.barcodeScanner.scan({
        formats: "QR_CODE",
        resultDisplayDuration: 0,
      }).then((data) => {
        this.busCode = data.text;
      });
    }
  }

}
