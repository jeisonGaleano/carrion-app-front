import { Viaje } from './../../shared/model/viaje';
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
    this.crearEntidad();
  }


  crear() {
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
      precios: new FormControl('', [Validators.required]),
      id: new FormControl('', [])
    });
  }

  private crearEntidad(): Viaje {
    const idUsuario: number = this.viajesForm.value['idUsuario'];
    const idConductor: number = this.viajesForm.value['idConductor'];
    const toneladas: number = this.viajesForm.value['toneladas'];
    const tipoVehiculo: number = this.viajesForm.value['tipoVehiculo'];
    const fechaCreacion: string = this.viajesForm.value['fechaCreacion'];
    const fechaServicio: string = this.viajesForm.value['fechaServicio'];
    const origen: string = this.viajesForm.value['origen'];
    const destino: string = this.viajesForm.value['destino'];
    const terminado: boolean = this.viajesForm.value['terminado'];
    const tipoCasa: string = this.viajesForm.value['tipoCasa'];
    const precios: number = this.viajesForm.value['precios'];
    return new Viaje(idUsuario,idConductor,toneladas,tipoVehiculo,fechaCreacion,fechaServicio,origen, destino
      ,terminado,tipoCasa,precios);
  }
}
