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
import { GetBusInfoPage } from '../pages/get-bus-info/get-bus-info';
import { StaticProvider } from '../providers/static/static';
import { HttpProvider } from '../providers/http/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BusHomePage,
    PassengerHomePage,
    IssueTicketPage,
    BuyTicketPage,
    ShowTicketPage,
    ValidateTicketPage,
    GetBusInfoPage
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
    ValidateTicketPage,
    GetBusInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Storage,
    StaticProvider,
    HttpProvider
  ]
})
export class AppModule {}
