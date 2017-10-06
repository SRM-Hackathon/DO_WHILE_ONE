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
  ticketTime: String;
  ticketFrom: String;
  ticketTo: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ticketCode = Md5.hashStr(Math.random().toString(), false).toString();
    this.ticketTime = '4:30 PM 06/10/17';
    this.ticketFrom = 'Station A';
    this.ticketTo = 'Station B';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueTicketPage');
  }

}
