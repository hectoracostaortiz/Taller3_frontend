import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../modelos/productoModel';
import { ProductoService } from '../modelos/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Observable<ProductoModel[]> | undefined;
  constructor(private ProductoService: ProductoService) { }
  
  ngOnInit() {
    this.productos = this.ProductoService.obtenerProductos();
  }
  borrarProducto(idProducto: string) {
    if(confirm("Seguro que quiere eliminar el producto?")) {
      this.ProductoService.eliminarProducto(idProducto).subscribe(data => {
        console.log("Registro eliminado!");
        this.ngOnInit();
      });
    }
  }
  
  filtrarProducto = "";
  
}