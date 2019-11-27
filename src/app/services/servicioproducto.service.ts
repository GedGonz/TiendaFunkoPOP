import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { producto } from '../model/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioproductoService {

  urlNetCore:string = 'https://localhost:5001/api/Producto';
  urlNodeJS: string = 'http://localhost:3000/api/Producto';
  constructor(private http: HttpClient) {
  }


  obtenerProductos(): Observable<producto[]> {
    const url = this.urlNetCore;
    return this.http.get<producto[]>(url);
  }

  obtenerProducto(_id: number): Observable<producto> {
    const url = `${this.urlNetCore}/${_id}`;
    console.log(url);
    return this.http.get<producto>(url);
  }

  nuevoProducto(_producto: producto){
    console.log(_producto);
    const url = this.urlNetCore;
    return this.http.post(url, _producto);
  }

  actualizarProducto(_producto: producto){
    console.log(_producto);
    const url = `${this.urlNetCore}/${_producto._id}`;
    return this.http.put(url, _producto);
  }

  eliminarProducto(_producto: producto){
    console.log(_producto);
    const url = `${this.urlNetCore}/${_producto._id}`;
    return this.http.delete(url);
  }
}
