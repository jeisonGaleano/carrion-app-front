import { VehiculoService } from './../../shared/service/vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/feature/login/shared/service/service/login.service';

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
  }

  crear() {
    let datos = this.loginService.obtenerDatos();
    let jsonDatos = JSON.parse(datos);
    this.registroVehiculoForm.controls.idConductor.setValue(jsonDatos.id);
    this.vehiculoService.guardar(this.registroVehiculoForm.value).subscribe((numero)=> {
      console.log(numero)
    });
  }

  private construirFormularioRegistrouUsuarios() {
    this.registroVehiculoForm = new FormGroup({
      idConductor: new FormControl('', []),
      placa: new FormControl('', [Validators.required]),
      numeroMotor: new FormControl('', [Validators.required]),
      numeroChasis: new FormControl('', [Validators.required]),
      toneladas: new FormControl('', [Validators.required]),
      tipoVehiculo: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required])
    });
  }

}
