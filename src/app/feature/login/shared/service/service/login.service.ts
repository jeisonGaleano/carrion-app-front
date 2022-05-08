import { environment } from 'src/environments/environment';
import { Usuario } from './../model/usuario';
import { HttpService } from 'src/app/core/services/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpService) {}

  public loginUsuario(usuario:  string, clave:  string) {
    return this.http.doGet<Usuario>(`${environment.endpoint}/usuarios-carrion/login/${usuario}/${clave}`,
                                            this.http.optsName('login'));
  }

 public guardarDatos(valor){
    const jsonData = JSON.stringify(valor)
    sessionStorage.setItem('usuarioDatos', jsonData);
 }

 public obtenerDatos() : any{
   return sessionStorage.getItem('usuarioDatos');
 }

}
