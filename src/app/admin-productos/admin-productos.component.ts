import { Component } from '@angular/core';
import { ProductoService } from '../modelos/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from '../modelos/productoModel';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent {

  ide = "";
  producto = new ProductoModel("", "", "", "", "", "", "", "");

  constructor(private productoService: ProductoService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.ide = this.route.snapshot.params["ide"];
    console.log("ide: "+this.ide);
    if (this.ide) {
      this.productoService.obtenerProducto(this.ide).subscribe(data => {
        this.producto = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("Nuevo producto");
    }
  }

  onSubmit() {
    console.log("Submit realizado");
    if (this.producto.ide) {//Editar producto
      this.productoService.actualizarProducto(this.producto).subscribe(data => {
        console.log(data);
        this.router.navigate(['/productos']);
      });
    } else {// crear producto
      console.log("Nuevo producto");
      this.productoService.agregarProducto(this.producto).subscribe(data => {
        this.router.navigate(['/productos']);
      });
    }
  }

}
