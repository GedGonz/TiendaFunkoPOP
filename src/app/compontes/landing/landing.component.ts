import { Component, OnInit } from '@angular/core';
import { ServicioproductoService } from 'src/app/services/servicioproducto.service';
import { producto } from 'src/app/model/producto';
import { HttpErrorResponse } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  todosProductos: producto[] = [];
  productos: producto[] = [];

  MIN: number = 0;
  MAX: number = 4;

   constructor(private servicio: ServicioproductoService) { 

    this.servicio.obtenerProductos().subscribe((resp: producto[]) => {

      this.todosProductos = resp;
      this.productos =  resp.slice(0, 4);

      this.timerCard(this.todosProductos);
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });

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
  }

}
