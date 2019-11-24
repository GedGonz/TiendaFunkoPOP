import { Component, OnInit, Input } from '@angular/core';
import { producto } from 'src/app/model/producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  @Input()
  productorecibido: producto;
  @Input()
  buscarproductorecibido: string;
  constructor() { }

  ngOnInit() {
  }

}
