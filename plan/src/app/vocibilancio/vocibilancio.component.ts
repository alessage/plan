import { Component, OnInit } from '@angular/core';
import { VocibilancioserviceService } from '../services/vocibilancioservice.service';

@Component({
  selector: 'app-vocibilancio',
  templateUrl: './vocibilancio.component.html',
  styleUrls: ['./vocibilancio.component.css']
})
export class VocibilancioComponent implements OnInit {

  vociBilancio: any = []; 


  constructor(private volbilservice: VocibilancioserviceService) { }

  ngOnInit() {
  
     this.volbilservice.getVociBilancio().then((data)=>{
      console.log(JSON.stringify(data));
      this.vociBilancio = data;
    }, (error)=>{
      console.log(JSON.stringify(error));
    })
    
  }



}
