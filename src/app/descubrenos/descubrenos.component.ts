import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descubrenos',
  templateUrl: './descubrenos.component.html',
  styleUrls: ['./descubrenos.component.scss']
})
export class DescubrenosComponent implements OnInit {
  cambiar: boolean = false

  Ccambiar(){
    this.cambiar = true;
    console.log(this.cambiar);
  }

  constructor() {
    console.log(this.cambiar);
  }

  ngOnInit(): void {
  }

}
