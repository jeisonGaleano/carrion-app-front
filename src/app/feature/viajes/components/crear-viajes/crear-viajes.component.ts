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
    this.viajesServices.guardar(this.viajesForm.value).subscribe((numero)=> {
      console.log(numero)
    });
  }

  private obtenerConductores(){
    this.usuariosServices.obtenerConductores().subscribe(listaDatos=>{
        this.conductorLista=listaDatos;
        console.log(this.conductorLista)
    })
  }

  private construirFormularioViajes() {
    var datos = this.loginService.obtenerDatos();
    var jsonDatos = JSON.parse(datos);
    this.viajesForm = new FormGroup({
      idUsuario: new FormControl(jsonDatos.id, [Validators.required]),
      idConductor: new FormControl('', [Validators.required]),
      toneladas: new FormControl('', []),
      tipoVehiculo: new FormControl('', [Validators.required]),
      fechaServicio: new FormControl('', [Validators.required]),
      origen: new FormControl('', [Validators.required]),
      destino: new FormControl('', [Validators.required]),
      terminado: new FormControl('', [Validators.required]),
      tipoCasa: new FormControl('', []),
      precios: new FormControl('', [Validators.required])
    });
  }
}
