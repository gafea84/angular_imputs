import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.css']
})
export class ListaNumerosComponent implements OnInit {

  @Input() numeros: number[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log('estoy en lista numeros', this.numeros)
  }

}
