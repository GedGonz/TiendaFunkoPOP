import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioproductoService } from 'src/app/services/servicioproducto.service';
import { producto } from 'src/app/model/producto';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  productoSeleccionado: producto;

  constructor(private route: ActivatedRoute, private servicio: ServicioproductoService) {
    this.servicio.obtenerProducto(this.route.snapshot.params.id).subscribe((resp: producto) => {

      this.productoSeleccionado = resp;

    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
   }

  ngOnInit() {
  }

}
