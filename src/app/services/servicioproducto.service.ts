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
  uri: string ='http://localhost:3000/api/producto'; //'https://marketfunkopop.herokuapp.com/api/Producto';
  constructor(private http: HttpClient) {
  }

/*
  obtenerProductos(): Observable<producto[]> {
    const url = this.uri;
    return this.http.get<producto[]>(url);
  }
*/
  async obtenerProductos(){
    const url = this.uri;
    return await this.http.get<producto[]>(url).toPromise();
  }

  obtenerProducto(_id: number): Observable<producto> {
    const url = `${this.uri}/${_id}`;

    return this.http.get<producto>(url);
  }

  nuevoProducto(_producto: FormData){

    const url = this.uri;
    return this.http.post(url, _producto).toPromise();
  }

  actualizarProducto(_producto: producto){

    const url = `${this.uri}/${_producto._id}`;
    return this.http.put(url, _producto);
  }

  eliminarProducto(_producto: producto){

    const url = `${this.uri}/${_producto._id}`;
    return this.http.delete(url);
  }
}
