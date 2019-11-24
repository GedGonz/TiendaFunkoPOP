import { Pipe, PipeTransform } from '@angular/core';
import { producto } from '../../../model/producto';


@Pipe({name: 'filtroproducto'})
export class filtroproducto implements PipeTransform {
  transform(productos: producto[], filtro: string): producto[] {

    console.log(filtro);
    // tslint:disable-next-line: max-line-length
    return productos.filter((x: producto) =>
        x.nombre.toLowerCase().startsWith(filtro.toLowerCase()) ||
        x.descripcion.toLowerCase().startsWith(filtro.toLowerCase())
    );
  }
}