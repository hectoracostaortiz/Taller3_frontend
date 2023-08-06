import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';// funcionalidad para comunicacion con el servidor
import { FormsModule } from '@angular/forms';// Modulo para crear formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AdminProductosComponent } from './admin-productos/admin-productos.component';
import { ProductoService } from './modelos/producto.service';
import { FiltroProductoPipe } from './filtro-producto.pipe';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    AdminProductosComponent,
    FiltroProductoPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
