import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../shared/service/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuarios } from '../../shared/model/usuarios';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistrouUsuariosComponent implements OnInit {

  public titulo = 'Registrar Usuario';
  registroUsuariosForm: FormGroup;
  constructor(protected usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.construirFormularioRegistrouUsuarios();

    this.crearEntidad();
  }

  crear() {
    this.usuariosService.guardar(this.registroUsuariosForm.value).subscribe((numero)=> {
      console.log(numero)
    });
  }

  private construirFormularioRegistrouUsuarios() {
    this.registroUsuariosForm = new FormGroup({
    identificacion: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    usuario: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required]),
    edad: new FormControl('', []),
    tipoRol: new FormControl('', [Validators.required]),
    ciudadResidencia: new FormControl('', []),
    correoElectronico: new FormControl('', [Validators.required]),
    fechaCreacion: new FormControl('', []),
    });
  }

  private crearEntidad(): Usuarios {
    const identificacion: number = this.registroUsuariosForm.value['identificacion'];
    const nombre: string = this.registroUsuariosForm.value['nombre'];
    const apellido: string = this.registroUsuariosForm.value['apellido'];
    const usuario: string = this.registroUsuariosForm.value['usuario'];
    const clave: string = this.registroUsuariosForm.value['clave'];
    const edad: number = this.registroUsuariosForm.value['edad'];
    const tipoRol: number = this.registroUsuariosForm.value['tipoRol'];
    const ciudadResidencia: string = this.registroUsuariosForm.value['ciudadResidencia'];
    const correoElectronico: string = this.registroUsuariosForm.value['correoElectronico'];
    const fechaCreacion: string = this.registroUsuariosForm.value['fechaCreacion'];
    return new Usuarios(identificacion,nombre,apellido,usuario,clave,edad,tipoRol,ciudadResidencia,correoElectronico,fechaCreacion);
  }

}
