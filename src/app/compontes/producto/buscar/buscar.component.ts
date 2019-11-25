import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioproductoService } from 'src/app/services/servicioproducto.service';
import { producto } from 'src/app/model/producto';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  // productos: producto[] = [];

  @Output()
  productos: EventEmitter<producto[]> = new EventEmitter<producto[]>();
  @Output()
  buscarproducto: EventEmitter<string>  = new EventEmitter<string>();

  todosProductos: producto[] = [];

  MIN: number = 0;
  MAX: number = 4;

  constructor(private servicio: ServicioproductoService) {

    this.servicio.obtenerProductos().subscribe((resp: producto[]) => {

        this.todosProductos = resp;
        this.productos.emit(this.todosProductos);

      }, (err: HttpErrorResponse) => {
        console.log(err);
      });

  }

  buscarProducto(valor) {

    if (valor.target.value) {

      this.buscarproducto.emit(valor.target.value);
    } else {

      this.buscarproducto.emit('');
    }

  }

  ngOnInit() {
    this.buscarproducto.emit('');
  }

}
