import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AdminProductosComponent } from './admin-productos/admin-productos.component';

//import { SortByPipe } from './filtro-tipo-producto.pipe';
import { FiltroProductoPipe } from './filtro-producto.pipe';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'productos', component: ListaProductosComponent},
  {path: 'productos/editar/:ide', component: AdminProductosComponent},
  {path: 'productos/eliminar/:ide', component: AdminProductosComponent},
  {path: 'productos/agregar', component: AdminProductosComponent},
  {path: '**', redirectTo: '/productos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
