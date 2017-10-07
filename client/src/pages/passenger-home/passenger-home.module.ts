import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassengerHomePage } from './passenger-home';

@NgModule({
  declarations: [
    //PassengerHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PassengerHomePage),
  ],
})
export class PassengerHomePageModule {}
