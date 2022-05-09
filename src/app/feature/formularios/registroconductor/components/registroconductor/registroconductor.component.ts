import { VehiculoService } from './../../shared/service/vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/feature/login/shared/service/service/login.service';
import { Vehiculo } from '../../shared/model/vehiculo';

@Component({
  selector: 'app-registroconductor',
  templateUrl: './registroconductor.component.html',
  styleUrls: ['./registroconductor.component.css']
})
export class RegistroconductorComponent implements OnInit {
  public titulo = 'Registrar Vehiculo';
  registroVehiculoForm: FormGroup;
  constructor(protected vehiculoService: VehiculoService,
    protected loginService: LoginService) { }

  ngOnInit(): void {
    this.construirFormularioRegistrouUsuarios();
    this.crearEntidad();
  }

  crear() {
    this.vehiculoService.guardar(this.registroVehiculoForm.value).subscribe((numero)=> {
      console.log(numero)
    });
  }

  private construirFormularioRegistrouUsuarios() {
    var datos = this.loginService.obtenerDatos();
    var jsonDatos = JSON.parse(datos);
    this.registroVehiculoForm = new FormGroup({
    idConductor: new FormControl(jsonDatos.id, []),
    placa: new FormControl('', [Validators.required]),
    numeroMotor: new FormControl('', [Validators.required]),
    numeroChasis: new FormControl('', [Validators.required]),
    toneladas: new FormControl('', [Validators.required]),
    tipoVehiculo: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required])
    });
  }

  private crearEntidad(): Vehiculo {
    const idConductor: number = this.registroVehiculoForm.value['identificacion'];
    const placa: string = this.registroVehiculoForm.value['placa'];
    const numeroMotor: string = this.registroVehiculoForm.value['numeroMotor'];
    const numeroChasis: string = this.registroVehiculoForm.value['numeroChasis'];
    const toneladas: number = this.registroVehiculoForm.value['toneladas'];
    const tipoVehiculo: number = this.registroVehiculoForm.value['tipoVehiculo'];
    const modelo: number = this.registroVehiculoForm.value['modelo'];
    const marca: string = this.registroVehiculoForm.value['marca'];
    return new Vehiculo(idConductor,placa,numeroMotor,numeroChasis,toneladas,tipoVehiculo,modelo,marca);
  }

}
