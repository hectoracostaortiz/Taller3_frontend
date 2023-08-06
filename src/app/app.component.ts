import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FruverLaHuertaFE';
  
  public tipos: Object = {text: "name", value: "tipo"};
  public datosTipos: Object[] = [
    {name: "Frutas", tipo: "Fruta"},
    {name: "Vertduras", tipo: "Verdura"},
    {name: "Hortalizas", tipo: "Hortaliza"},
    {name: "Tubérculos", tipo: "Tubérculo"}
  ];
  /*
  private sel: any;
  private positionSelect: any[] = [{
      name: "Social Media Manager",
      position: "Social Media Manager"
  },
  {
      name: "Product Manager",
      position: "Product Manager"
  }]
  */
}