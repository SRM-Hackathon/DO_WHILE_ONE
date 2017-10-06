import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IssueTicketPage } from './issue-ticket';

@NgModule({
  declarations: [
    //IssueTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(IssueTicketPage),
  ],
})
export class IssueTicketPageModule {}
