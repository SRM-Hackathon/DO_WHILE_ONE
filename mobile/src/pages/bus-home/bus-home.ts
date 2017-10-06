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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.storage = this.navParams.get('storage');
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

}
