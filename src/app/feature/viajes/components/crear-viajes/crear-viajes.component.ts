import { Conductor } from './../../../formularios/registrousuario/shared/model/conductor';
import { ViajesService } from './../../shared/services/viajes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/feature/formularios/registrousuario/shared/service/usuarios.service';
import { LoginService } from 'src/app/feature/login/shared/service/service/login.service';

@Component({
  selector: 'app-crear-viajes',
  templateUrl: './crear-viajes.component.html',
  styleUrls: ['./crear-viajes.component.css']
})
export class CrearViajesComponent implements OnInit {
  viajesForm: FormGroup;
  public titulo = 'Crear viajes';
  conductorLista: Conductor[]=[];

  constructor(protected viajesServices: ViajesService,
    protected usuariosServices: UsuariosService,
    protected loginService: LoginService) { }


  ngOnInit(): void {
    this.obtenerConductores();
    this.construirFormularioViajes();
  }


  crear() {
    let datos = this.loginService.obtenerDatos();
    let jsonDatos = JSON.parse(datos);
    this.viajesForm.controls.idUsuario.setValue(jsonDatos.id);
    this.viajesServices.guardar(this.viajesForm.value).subscribe((numero)=> {
      console.log(numero)
    });
  }

   obtenerConductores(){
    this.usuariosServices.obtenerConductores().subscribe(listaDatos=>{
        this.conductorLista=listaDatos;
        console.log(this.conductorLista)
    })
  }

  private construirFormularioViajes() {
    this.viajesForm = new FormGroup({
      id: new FormControl('', []),
      idUsuario: new FormControl('', []),
      idConductor: new FormControl('', []),
      toneladas: new FormControl('', []),
      tipoVehiculo: new FormControl('', []),
      fechaServicio: new FormControl('', []),
      origen: new FormControl('', [Validators.required]),
      destino: new FormControl('', [Validators.required]),
      terminado: new FormControl('', [Validators.required]),
      tipoCasa: new FormControl('', []),
      precios: new FormControl('', [Validators.required])
    });
  }
}
