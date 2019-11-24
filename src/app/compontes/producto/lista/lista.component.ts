import { Component, OnInit } from '@angular/core';
import { ServicioproductoService } from 'src/app/services/servicioproducto.service';
import { producto } from 'src/app/model/producto';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  
  productos: producto[] = [];
  productosSeleccionados: producto[] = [];

  constructor(private servicio: ServicioproductoService) { 

    this.servicio.obtenerProductos().subscribe((resp: producto[]) => {
      this.productosSeleccionados =  resp.slice(0, 4);
      this.productos = this.productosSeleccionados;
      
      console.log('Productos'+ resp);
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
  }








  ngOnInit() {
  }

}
