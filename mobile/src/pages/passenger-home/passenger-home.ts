import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyTicketPage } from '../buy-ticket/buy-ticket';
import { ShowTicketPage } from '../show-ticket/show-ticket';


/**
 * Generated class for the PassengerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passenger-home',
  templateUrl: 'passenger-home.html',
})
export class PassengerHomePage {

  storage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.storage = this.navParams.get('storage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassengerHomePage');
  }

  buyTicket() {
    this.navCtrl.push(BuyTicketPage, {
      storage: this.storage
    });
  }

  showTicket() {
    this.navCtrl.push(ShowTicketPage, {
      storage: this.storage
    });
  }

}
