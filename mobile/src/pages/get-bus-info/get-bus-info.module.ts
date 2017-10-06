import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetBusInfoPage } from './get-bus-info';

@NgModule({
  declarations: [
    GetBusInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(GetBusInfoPage),
  ],
})
export class GetBusInfoPageModule {}
