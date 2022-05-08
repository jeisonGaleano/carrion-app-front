import { LoginService } from './../../../feature/login/shared/service/service/login.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: [`:host {
    border: 0 solid #e1e1e1;
    border-bottom-width: 1px;
    display: block;
    height: 48px;
    padding: 0 16px;
  }

  nav a {
    color: #8f8f8f;
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
    margin-right: 20px;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
  }

  nav a.router-link-active {
    color: #106cc8;
  }`],
})
export class NavbarComponent implements OnInit {


  public clientes: MenuItem[] = [
    { url: '/home', nombre: 'Inicio' },
    { url: '/viaje/crear', nombre: 'Crear viajes' }
  ];

  public conductores: MenuItem[] = [
    { url: '/home', nombre: 'Inicio' },
    { url: '/registro-conductor', nombre: 'Registro vehiculo' },
    { url: '/viaje/listar', nombre: 'Lista de viajes' }
  ];

  constructor(protected loginService: LoginService) { }

  ngOnInit() {
  }

  obtenerRol(): number{
    const datos=JSON.parse(this.loginService.obtenerDatos());
    if(datos==null){
      return 1;
    }
    console.log(datos.tipoRol)

    return datos.tipoRol == 1 ? 2 : 3
  }


}
