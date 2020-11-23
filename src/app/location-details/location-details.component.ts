import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiServiceService} from '../services/api-service.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
   cityname:String;
   weatherData: any;
  constructor(private route:ActivatedRoute,private service:ApiServiceService) {
    this.route.queryParams.subscribe((data)=>{
     this.cityname = data.cityname; 
     this.service.getApi(this.cityname).subscribe((data)=>{
      this.setWeatherData(data);
    })
    })
   
   }
   setWeatherData(data) {         //get data func
    this.weatherData = data;
    this.weatherData.temp = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_min =(this.weatherData.main.temp_min  - 273.15 ).toFixed(0) ;
    this.weatherData.temp_max =(this.weatherData.main.temp_max - 273.15 ).toFixed(0) ;
    this.weatherData.feels_like =(this.weatherData.main.feels_like - 273.15 ).toFixed(0) ; 
}

  ngOnInit(): void {
  }

}
