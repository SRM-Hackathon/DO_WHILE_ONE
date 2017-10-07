import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Md5} from 'ts-md5/dist/md5';
import { GetBusInfoPage } from '../get-bus-info/get-bus-info';

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
    this.storage = this.navParams.get('storage');
    this.showBusInfo(this.storage.busCode);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueTicketPage');
  }

  buyTicket() {
    this.ticketTime = new Date();
    this.ticketFrom = 'Stop A';

    this.code = Md5.hashStr(Math.random().toString(), false).toString();
    
    this.ticketCode =  this.code + ';' + (this.ticketTime.getTime().toString())
      + ';' + this.ticketFrom + ';' + this.ticketTo
      + ';' + this.storage.busCode;

    console.log(this.ticketCode);

    this.storage.issuedTickets[this.code] = {
      code: this.code,
      time: new Date(),
      from: this.ticketFrom,
      to: this.ticketTo
    };
  }

  showBusInfo(busCode) {
    let self = this;
    this.navCtrl.push(GetBusInfoPage, {
      storage: this.storage,
      busCode: busCode,
      isIssuer: true,
      buyAction: (destStop) => {
        self.ticketTo = destStop;
        self.buyTicket();
      }
    });
  }

}
