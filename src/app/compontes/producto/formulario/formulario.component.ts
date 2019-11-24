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
  base64String: any; 
  constructor(private servicio: ServicioproductoService) {

    this.model.imagen='https://bass.knog.com.au/media/crystalcustomparts/original/pop-white-without-knog.jpg';
    this.servicio.obtenerProductos().subscribe((resp: producto[]) => {

      this.productos = resp;

      console.log('Productos'+ resp);
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  nuevoProducto(){

    if (this.model != null) {

      console.log(this.model);
      if(this.model.productoId === 0) {

        this.servicio.nuevoProducto(this.model).subscribe((res) => {
          console.log(res);
        });
      } else if(this.model.productoId > 0)
      {
        this.servicio.actualizarProducto(this.model).subscribe((res) => {
          console.log(res);
        });
      }
    }
  }

  eliminarProducto(_producto: producto): void {
    this.servicio.eliminarProducto(_producto).subscribe((res) => {
      console.log(res);
    });
    console.log(_producto);
  }

  editarProducto(_producto: producto): void {
    this.model.productoId =_producto.productoId;
    this.model.nombre =_producto.nombre;
    this.model.descripcion =_producto.descripcion;
    this.model.precio =_producto.precio;
    this.model.categoria =_producto.categoria;
    this.model.imagen = _producto.imagen;

  }

  onFileChanged(event) {

  let file = event.target.files[0];
  let reader = new FileReader();
  reader.onload = ((theFile) => {
    return (e) => {

      const binaryData = e.target.result;
      this.base64String = window.btoa(binaryData);
      this.model.imagen = 'data:image/jpeg;base64,' + this.base64String;
      console.log(this.base64String);

    };
  })(file);
  reader.readAsBinaryString(file);
}


  ngOnInit() {
  }

}
