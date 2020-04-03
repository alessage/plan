import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vocibilanciomaster',
  templateUrl: './vocibilanciomaster.component.html',
  styleUrls: ['./vocibilanciomaster.component.css']
})
export class VocibilanciomasterComponent implements OnInit {

  vociBilancioMaster: any = [];
  tableStyle = {
    'border': '1px solid black'
  };

  constructor() { }

  ngOnInit() {
    this.vociBilancioMaster.push({voce: "A10", prefisso: "10)", descrizione: "Cassa e disponibilità liquide"});
    this.vociBilancioMaster.push({voce: "A100", prefisso: "100)", descrizione: "Attività fiscali"});
    this.vociBilancioMaster.push({voce: "A100a", prefisso: "a)", descrizione: "correnti"});
    this.vociBilancioMaster.push({voce: "A100b", prefisso: "b)", descrizione: "anticipate"});
    console.log(this.vociBilancioMaster);
  }

  aggiungi() {
    let _vocemaster = { voce: this.vociBilancioMaster.voce, prefisso: this.vociBilancioMaster.prefisso, descrizione: this.vociBilancioMaster.descrizione };
    this.vociBilancioMaster.push(_vocemaster);
  }

}
