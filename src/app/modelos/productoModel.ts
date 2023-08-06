export class ProductoModel {
    constructor(
        public ide:string, 
        public nombre:string,
        public tipo:string,
        public descripcion:string,
        public precio_compra:string,
        public precio_venta:string,
        public cant_disponible:string,
        public uni_medida:string) {

        }
}
