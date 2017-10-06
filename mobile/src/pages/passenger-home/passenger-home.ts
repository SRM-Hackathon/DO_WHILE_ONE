import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyTicketPage } from '../buy-ticket/buy-ticket';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassengerHomePage');
  }

  buyTicket() {
    this.navCtrl.push(BuyTicketPage);
  }

  showTicket() {

  }

}
