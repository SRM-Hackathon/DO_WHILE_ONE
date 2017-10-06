import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-ticket',
  templateUrl: 'show-ticket.html',
})
export class ShowTicketPage {

  ticketCode: String;
  ticketTime: Date;
  ticketFrom: String;
  ticketTo: String;
  storage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.storage = this.navParams.get('storage');

    console.log(this.storage.boughtTickets);

    if (this.storage.boughtTickets.length > 0) {
      let latestTicket = this.storage.boughtTickets[0];
      this.ticketCode = latestTicket.code;
      this.ticketTime = latestTicket.time;
      this.ticketFrom = latestTicket.from;
      this.ticketTo = latestTicket.to;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowTicketPage');
  }

}
