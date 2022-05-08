import { Router } from '@angular/router';
import { LoginService } from './../shared/service/service/login.service';
import { Usuario } from './../shared/service/model/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public titulo = 'Iniciar sesión';
  public loginForm: FormGroup;
  private usuario: Usuario;

  constructor(protected loginService: LoginService, protected router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.construirFormularioLogin();
  }

  private construirFormularioLogin() {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required])
    });
  }

  public login() {

    this.fabricarUsuario();
  }

  private fabricarUsuario() {
  const usuario=this.loginForm.get('usuario').value;
  const clave = this.loginForm.get('clave').value;

    this.loginService.loginUsuario(usuario,clave).subscribe(usuarioServicio=> {
      this.usuario=usuarioServicio;
      this.loginService.guardarDatos(this.usuario)
      const url = this.loginService.obtenerDatos().tipoRol == 1 ? 'home' : 'home'
      this.router.navigate([url])
    })
  }

}
