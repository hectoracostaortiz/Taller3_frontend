import { Component } from '@angular/core';
import { UsuarioModel } from '../modelos/usuarioModel';
import { UsuarioService } from '../modelos/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usu = "";
  cla = "";
  usuario = new UsuarioModel("", "", "");

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    /*this.usu = this.route.snapshot.params["usu"];
    this.cla = this.route.snapshot.params["cla"];
    console.log("usu: "+this.usu);
    console.log("cla: "+this.cla);
    if (this.usu && this.cla) {
      this.usuarioService.obtenerUsuario(this.usu, this.cla, this.usuario).subscribe(data => {
        this.usuario = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("Nuevo producto");
    }*/
  }

  onSubmit() {
    this.usuarioService.obtenerUsuario(this.usuario).subscribe(data => {
      console.log(data);
      this.router.navigate(["/productos"]);
    });
  }

  onSubmit_old() {
    
    this.usu = this.route.snapshot.params["usuario"];
    this.cla = this.route.snapshot.params["clave"];
    
    console.log("Submit realizado -> "+this.cla);

    if (this.usu && this.cla) {
      this.usuarioService.obtenerUsuario(this.usuario).subscribe(data => {
        console.log(data);
        this.router.navigate(["/productos"]);
      });
    } else {// crear producto
      alert("Usuario o contraseña incorrectos.");
      /*
      console.log("Nuevo producto");
      this.productoService.agregarProducto(this.producto).subscribe(data => {
        this.router.navigate(['/productos']);
      });
      */
    }
  }

}
