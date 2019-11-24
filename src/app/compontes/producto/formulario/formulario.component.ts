import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/model/producto';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  model: producto = new producto();
  constructor() { }



  nuevoProducto(){

    if (this.model!=null) {
      console.log(this.model);
    }
    this.model = new producto();
  }

  ngOnInit() {
  }

}
