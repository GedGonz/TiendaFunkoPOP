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

  constructor(private servicio: ServicioproductoService) { 

    this.servicio.obtenerProductos().subscribe((resp: producto[]) => {

      this.productos=resp;
      
      console.log('Productos'+ resp);
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  nuevoProducto(){

    if (this.model!=null) {
      console.log(this.model);
      if(this.model.productoId==0)
      {

        this.servicio.nuevoProducto(this.model).subscribe((res)=>{
          console.log(res);
        });
      }
      else if(this.model.productoId>0)
      {
        this.servicio.actualizarProducto(this.model).subscribe((res)=>{
          console.log(res);
        });
      }
    }
  }

  eliminarProducto(_producto: producto): void {
    this.servicio.eliminarProducto(_producto).subscribe((res)=>{
      console.log(res);
    });
    console.log(_producto);
  }

  editarProducto(_producto: producto): void {
    this.model = _producto;


    

  }


  ngOnInit() {
  }

}
