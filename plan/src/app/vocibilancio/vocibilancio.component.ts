import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vocibilancio',
  templateUrl: './vocibilancio.component.html',
  styleUrls: ['./vocibilancio.component.css']
})
export class VocibilancioComponent implements OnInit {

  vociBilancio: any = []; 

  constructor() { }

  ngOnInit() {

    this.vociBilancio.push( {"descrizione" : "Voce1" , "codice": "A.001.000.000"});
    this.vociBilancio.push( {"descrizione" : "Voce2" , "codice": "A.002.000.000"});
    this.vociBilancio.push( {"descrizione" : "Voce3" , "codice": "A.003.000.000"});
    this.vociBilancio.push( {"descrizione" : "Voce4" , "codice": "A.004.000.000"});
    this.vociBilancio.push( {"descrizione" : "Voce5" , "codice": "A.005.000.000"});
  }

}
