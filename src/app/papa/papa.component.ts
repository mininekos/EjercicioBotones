import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-papa',
  templateUrl: './papa.component.html',
  styleUrls: ['./papa.component.css']
})
export class PapaComponent implements OnInit {
  texto: String;

  constructor() { 
    this.texto="";
  }

  ngOnInit(): void {
  }

  public mandarTexto(cadena:String){
    return this.texto=cadena;
  }

}
