import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newvocebilancio',
  templateUrl: './newvocebilancio.component.html',
  styleUrls: ['./newvocebilancio.component.css']
})
export class NewvocebilancioComponent implements OnInit {

  descrizione:string;
  codice:string;

  constructor() { }

  ngOnInit() {
  }

  insert(){
    
  }

}
