import { Component, OnInit } from '@angular/core';
import { ServicioproductoService } from 'src/app/services/servicioproducto.service';
import { producto } from 'src/app/model/producto';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  model: producto = new producto();
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



  nuevoProducto(){

    if (this.model!=null) {
      console.log(this.model);
      this.servicio.nuevoProducto(this.model).subscribe((res)=>{
        console.log(res);
      });
    }
   
  }

  ngOnInit() {
  }

}
