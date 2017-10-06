import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
apikey ='12dec5ca1140ae41';
url;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q'
  }
getWeather(city, state){
  return this.http.get(this.url+'/'+state+'/'+city+'.json')
 .map(res => res.json());
}


}
