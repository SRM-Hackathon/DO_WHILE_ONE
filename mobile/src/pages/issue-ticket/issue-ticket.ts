import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Md5} from 'ts-md5/dist/md5';

/**
 * Generated class for the IssueTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-issue-ticket',
  templateUrl: 'issue-ticket.html',
})
export class IssueTicketPage {

  ticketCode: String;
  ticketTime: Date;
  ticketFrom: String;
  ticketTo: String;
  storage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ticketCode = Md5.hashStr(Math.random().toString(), false).toString();
    this.ticketTime = new Date();
    this.ticketFrom = 'Stop A';
    this.ticketTo = 'Stop C';

    this.storage = this.navParams.get('storage');
    this.storage.issuedTickets.push({
      code: this.ticketCode,
      time: new Date(),
      from: 'Stop A',
      to: 'Stop C'
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueTicketPage');
  }

}
