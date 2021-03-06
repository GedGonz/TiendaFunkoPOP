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
  file:any;

  constructor(private servicio: ServicioproductoService) {

   this.obtenerProductos();

  }
    
  obtenerProductos(){

      this.servicio.obtenerProductos().subscribe( (resp: producto[]) => {

        this.productos= resp;
   
         console.log('Productos'+ JSON.stringify(resp));
         }, (err: HttpErrorResponse) => {
           console.log(err);
         });
  }

  nuevoProducto(){
    console.log(this.model._id > 0);
    if (this.model != null) {

      if(!this.model._id) {
       
        const formData = new FormData();
        
        formData.append('nombre', this.model.nombre);
        formData.append('descripcion', this.model.descripcion);
        formData.append('precio', this.model.precio);
        formData.append('categoria', this.model.categoria);
        formData.append('imagen', this.file);

        this.servicio.nuevoProducto(formData).subscribe((res) => {
          console.log(res);
          this.model = new producto();
          this.obtenerProductos();
        });

      } else if(this.model._id)
      {

        this.servicio.actualizarProducto(this.model).subscribe((res) => {
          console.log(res);
          this.obtenerProductos();
        });
      }      
    } 
  }

  eliminarProducto(_producto: producto): void {
    this.servicio.eliminarProducto(_producto).subscribe((res) => {
      this.obtenerProductos();
    });
  


  }

  editarProducto(_producto: producto): void {
    this.model._id =_producto._id;
    this.model.nombre =_producto.nombre;
    this.model.descripcion =_producto.descripcion;
    this.model.precio =_producto.precio;
    this.model.categoria =_producto.categoria;
    this.model.imagen = _producto.imagen;

  }

  onFileChanged(event) {

  this.file = event.target.files[0];
  let reader = new FileReader();
  reader.onload = ((theFile) => {
    return (e) => {

      const binaryData = e.target.result;
      this.base64String = window.btoa(binaryData);
      this.model.imagen = 'data:image/jpeg;base64,' + this.base64String;

    };
  })(this.file);
  reader.readAsBinaryString(this.file);
}

clear():void {

  this.model = new producto();
}

  ngOnInit() {
  }

}
