import { Component, OnInit, Input  } from '@angular/core';
import { ServicioproductoService } from 'src/app/services/servicioproducto.service';
import { producto } from 'src/app/model/producto';
import { HttpErrorResponse } from '@angular/common/http';
import {filtroproducto} from './filtroproducto.pipes';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input()
  tipo: boolean;
  @Input()
  productos: producto[] = [];
  @Input()
  filtrarproducto: string = '';

  todosProductos: producto[] = [];

  MIN: number = 0;
  MAX: number = 4;

   constructor(private servicio: ServicioproductoService) {
console.log('ENTRA EN LISTA');
  }


  timerCard(resp: any[]) {

    setInterval( () => {
      if (this.MAX < resp.length) {
        this.MIN = this.MAX;
        this.MAX = this.MAX + 4;

      } else {
        this.MIN = 0;
        this.MAX = 4;
      }
      this.productos = this.todosProductos.slice(this.MIN, this.MAX);

    }, 5000 );
    }


  ngOnInit() {
    console.log(this.tipo);
    console.log("cantidad de Producto "  + this.productos.length);
    if (this.tipo) {

     
      if(this.productos.length <= 0) {
        
        this.servicio.obtenerProductos().subscribe((resp: producto[]) => {
          console.log("cantidad de Producto "  +resp.length);
        this.todosProductos = resp;
        this.productos =  this.todosProductos.slice(0, 4);
        this.timerCard(this.todosProductos);

          }, (err: HttpErrorResponse) => {
            console.log(err);
          });
      }

    }

  }

}
