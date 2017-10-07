import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusHomePage } from './bus-home';

@NgModule({
  declarations: [
    //BusHomePage,
  ],
  imports: [
    IonicPageModule.forChild(BusHomePage),
  ],
})
export class BusHomePageModule {}
