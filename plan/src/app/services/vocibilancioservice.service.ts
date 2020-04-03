import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VocibilancioserviceService {

 
  constructor(private httpClient:HttpClient) { }

  apiUrl : string = "http://localhost:4200/assets/json/";// url per l'api


  getVociBilancio(){
    return this.httpClient.get(this.apiUrl+"vocibilancio.json").toPromise();
  }


}
