import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoModel } from './productoModel';
@Injectable({
    providedIn: 'root'
})
export class ProductoService {
    BASE_URL = "http://localhost:4000";// Este puerto es el que se configuro en el backend
    constructor(private http:HttpClient) {
    }
    // Se obtienen los registros de los prodcutos de la basede datos consumiendo el método GET del backend
    obtenerProductos() {
        return this.http.get<ProductoModel[]>(`${this.BASE_URL}/productos`);
    }
    // Se obtiene un producto con su ide en la BD consumiendo el metodo GET del Backend
    obtenerProducto(ide: string) {
        return this.http.get<ProductoModel[]>(`${this.BASE_URL}/productos/${ide}`);
    }
    // para agregar un  producto, se envia por post el modelo y se ejecuta el método post del backend
    agregarProducto(producto: ProductoModel) {
        return this.http.post<string>(`${this.BASE_URL}/productos`, producto);
    }
    // Para actualizar un productos se envia producto completo y se lo envia al método put del backend
    actualizarProducto(producto: ProductoModel) {
        return this.http.put<string>(`${this.BASE_URL}/productos/${producto.ide}`, producto);
    }
    // Para eliminar un productos se envia el ide y se lo envia al método delete del backend 
    eliminarProducto(ide: string) {
        return this.http.delete<string>(`${this.BASE_URL}/productos/${ide}`);
    }
    /*
    // Para filtrar los productos se envia el tipo y se lo envia al método get del backend 
    filtrarProductos(tipo: string) {
        //alert(tipo);
        return this.http.get<ProductoModel[]>(`${this.BASE_URL}/fproductos/${tipo}`);
    }
    */
}