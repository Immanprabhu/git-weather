import { HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  queryParams: any;
  navigate() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { 

  }
  url ="http://api.openweathermap.org/data/2.5/weather?";
  apiKey = '8beb34a8cbd23ecd9aeef1fcf751c255';
  getApi(city){
      let params = new  HttpParams()
      .set('q',city)
      .set('appid',this.apiKey)
      return this.http.get(this.url,{params} )
  }

}
