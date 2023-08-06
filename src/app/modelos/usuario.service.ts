import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from './usuarioModel';
@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    BASE_URL = "http://localhost:4000";// Este puerto es el que se configuro en el backend
    constructor(private http:HttpClient) {
    }
    // Se obtiene el usuario con su usu y clave en la BD consumiendo el metodo GET del Backend
    obtenerUsuario(usuario: UsuarioModel) {
        return this.http.post<string>(`${this.BASE_URL}/login`, usuario);
    }
}