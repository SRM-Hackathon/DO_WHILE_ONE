import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IssueTicketPage } from '../issue-ticket/issue-ticket';
import { ValidateTicketPage } from '../validate-ticket/validate-ticket';

/**
 * Generated class for the BusHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus-home',
  templateUrl: 'bus-home.html',
})
export class BusHomePage {

  storage: any;
  busNumber: string;
  busCode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.storage = this.navParams.get('storage');
    this.busNumber = '';
    this.busCode = '';

    this.storage.persist.get('busCode').then((code) => {
      this.busNumber = code;
      this.setBusNumber();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusHomePage');
  }

  issueTicket() {
    this.navCtrl.push(IssueTicketPage, {
      storage: this.storage
    });
  }

  validateTicket() {
    this.navCtrl.push(ValidateTicketPage, {
      storage: this.storage
    });
  }

  setBusNumber() {
    this.busCode = this.busNumber;
    this.storage.busCode = this.busCode;
    this.storage.persist.set('busCode', this.busCode);
  }

}
