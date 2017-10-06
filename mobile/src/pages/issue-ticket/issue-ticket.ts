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

  ticketCode: string;
  ticketTime: Date;
  ticketFrom: string;
  ticketTo: string;
  storage: any;
  code: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ticketTime = new Date();
    this.ticketFrom = 'Stop A';
    this.ticketTo = 'Stop C';
    this.code = Md5.hashStr(Math.random().toString(), false).toString();
    this.ticketCode =  this.code + ';' + (this.ticketTime.getTime().toString())
                        + ';' +  this.ticketFrom + ';' + this.ticketTo  ;

    console.log(this.ticketCode);

    this.storage = this.navParams.get('storage');
    this.storage.issuedTickets[this.code] = {
      code: this.code,
      time: new Date(),
      from: this.ticketFrom,
      to: this.ticketTo
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueTicketPage');
  }

}
