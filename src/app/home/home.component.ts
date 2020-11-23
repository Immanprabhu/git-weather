import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  getUrl: any;
  newArray = [];
  cityArray = ['chennai','tokyo','delhi','london','selam','mumbai','tichy','bangalore','mangalore','norway'];
  errmsg="";
  respons: Object;
  errorMessage: string;
  constructor(private route: ApiServiceService,private router:Router) { 

  }
  
getCityName(city) {
    this.route.getApi(city).subscribe((data) => {
      this.getUrl = data;
      this.router.navigate(['/cityDetails'], 
        { queryParams: { cityname: this.getUrl.name} }) },
          (error)=>{
            this.errmsg = error.message;
            console.log(error.message);
            throw  error;
            } )
}
 ngOnInit(){
    this.cityArray.forEach(item => {
      this.route.getApi(item).subscribe((data) => {
        this.newArray.push(data)

      })
    })
  }

}
