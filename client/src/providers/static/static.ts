import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StaticProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StaticProvider {

  busStopsList: any;

  constructor(public http: Http) {
    console.log('Hello StaticProvider Provider');
    this.busStopsList = {
      '12A': ['Stop A', 'Stop C', 'Stop R', 'Stop K', 'Stop Q'],
      '43G': ['Stop X', 'Stop W', 'Stop C1', 'Stop B', 'Stop G'],
      '22B': ['Stop B2', 'Stop G3', 'Stop Y', 'Stop W', 'Stop V']
    };
  }

  getBusStops(busCode) {
    if (busCode in this.busStopsList) {
      return Promise.resolve(this.busStopsList[busCode]);
    } else {
      return Promise.reject('Bus Code Not Found!');
    }
  }

}
