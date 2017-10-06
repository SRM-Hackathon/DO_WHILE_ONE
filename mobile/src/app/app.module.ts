import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BusHomePage } from '../pages/bus-home/bus-home';
import { PassengerHomePage } from '../pages/passenger-home/passenger-home';
import { IssueTicketPage } from '../pages/issue-ticket/issue-ticket';
import { BuyTicketPage } from '../pages/buy-ticket/buy-ticket';
import { ShowTicketPage } from '../pages/show-ticket/show-ticket';
import { ValidateTicketPage } from '../pages/validate-ticket/validate-ticket';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BusHomePage,
    PassengerHomePage,
    IssueTicketPage,
    BuyTicketPage,
    ShowTicketPage,
    ValidateTicketPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BusHomePage,
    PassengerHomePage,
    IssueTicketPage,
    BuyTicketPage,
    ShowTicketPage,
    ValidateTicketPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Storage
  ]
})
export class AppModule {}
