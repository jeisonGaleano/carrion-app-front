import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../shared/service/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    });
  }

}
