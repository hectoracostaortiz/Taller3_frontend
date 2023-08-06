import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultadoFiltro = [];
    for (const producto of value) {
      const pro = producto.nombre;
      if (pro.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoFiltro.push(producto);
      }
    }
    return resultadoFiltro;
  }
}

