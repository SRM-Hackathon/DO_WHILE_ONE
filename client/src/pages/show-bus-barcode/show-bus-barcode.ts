import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowBusBarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-bus-barcode',
  templateUrl: 'show-bus-barcode.html',
})
export class ShowBusBarcodePage {

  storage: any;
  busCode;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.storage = this.navParams.get('storage');
    this.busCode = 'b;' + this.storage.busCode;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowBusBarcodePage');
  }

}
