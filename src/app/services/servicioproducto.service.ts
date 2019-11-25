import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { producto } from '../model/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioproductoService {

  constructor(private http: HttpClient) {
  }


  obtenerProductos(): Observable<producto[]> {
    const url = `https://localhost:5001/api/Producto`;
    return this.http.get<producto[]>(url);
  }

  obtenerProducto(productoId: number): Observable<producto> {
    const url = `https://localhost:5001/api/Producto/${productoId}`;
    return this.http.get<producto>(url);
  }

  nuevoProducto(_producto: producto){
    console.log(_producto);
    const url = `https://localhost:5001/api/Producto`;
    return this.http.post(url, _producto);
  }

  actualizarProducto(_producto: producto){
    console.log(_producto);
    const url = `https://localhost:5001/api/Producto/${_producto.productoId}`;
    return this.http.put(url, _producto);
  }

  eliminarProducto(_producto: producto){
    console.log(_producto);
    const url = `https://localhost:5001/api/Producto/${_producto.productoId}`;
    return this.http.delete(url);
  }
}
