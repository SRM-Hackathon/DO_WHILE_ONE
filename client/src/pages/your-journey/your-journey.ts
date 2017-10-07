import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the YourJourneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-your-journey',
  templateUrl: 'your-journey.html',
})
export class YourJourneyPage {

  storage: any;
  ticket: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications) {
    this.storage = this.navParams.get('storage');
    this.ticket = this.storage.boughtTickets[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourJourneyPage');

    if (!this.ticket.userStops) {
      return;
    }
    this.localNotifications.clearAll();
    this.localNotifications.schedule({
      id: 1,
      text: this.ticket.userStops.length + ' stops remaining',
      //sound: 'file://sound.mp3',
      data: {},
      priority: 0
    });
  }

}
