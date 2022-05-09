import { Usuarios } from './../../../formularios/registrousuario/shared/model/usuarios';
import { UsuariosService } from './../../../formularios/registrousuario/shared/service/usuarios.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './../../../../core/services/http.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ViajesService } from '@viajes/shared/services/viajes.service';
import { Router } from '@angular/router';
import { Viaje } from './../../shared/model/viaje';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViajesComponent } from './crear-viajes.component';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('CrearViajesComponent', () => {
  let component: CrearViajesComponent;
  let fixture: ComponentFixture<CrearViajesComponent>;
  let router: Router;
  let viajeService: ViajesService;
  let usuarioService: UsuariosService;

  let viajes: Viaje[] = [
    {
      id: 1,
      idUsuario: 1,
      idConductor: 1,
      toneladas: 12,
      tipoVehiculo: 1,
      fechaCreacion: '2022-05-09',
      fechaServicio: '2022-05-10',
      origen: 'Cali',
      destino: 'Bogota',
      terminado: false,
      tipoCasa: 'Apartamento',
      precios:120000
    }
  ];

  let usuarios: Usuarios[] = [
    {
      id:  1,
      identificacion: 1143151677,
      nombre: 'JsonGB',
      apellido: 'Galeano',
      usuario: 'Jsongb',
      clave: 'Json123',
      edad: 22,
      tipoRol: 1,
      ciudadResidencia: 'Barranquilla',
      correoElectronico: 'Jgabolano@gmail.com',
      fechaCreacion: '2022-05-09'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearViajesComponent ],
      imports: [HttpClientModule, RouterTestingModule, CommonModule, FormsModule, ReactiveFormsModule],
      providers: [ViajesService, HttpService, NgbModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearViajesComponent);
    component = fixture.componentInstance;
    viajeService=TestBed.inject(ViajesService);
    usuarioService=TestBed.inject(UsuariosService);

    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia listar las canchas por Tipo de cancha', () => {
    component.obtenerConductores();
    expect(usuarioService.obtenerConductores).toHaveBeenCalled();
    expect(1).toBeGreaterThanOrEqual(component.conductorLista.length);
    expect(component.conductorLista).toEqual(usuarios);
  });

  it('deberia crear el objeto Viaje', () => {

    const viaje: Viaje = new Viaje(1,1,1,10,2,'2022-05-09',
    '2022-05-10','Barranquilla','Soledad',false,'Casa',120000);

    component.viajesForm.controls.idUsuario.setValue(1);
    component.viajesForm.controls.idConductor.setValue(1);
    component.viajesForm.controls.toneladas.setValue(12);
    component.viajesForm.controls.tipoVehiculo.setValue(1);
    component.viajesForm.controls.fechaServicio.setValue('2022-05-11');
    component.viajesForm.controls.fechaServicio.setValue('2022-05-12');
    component.viajesForm.controls.origen.setValue('Barranquilla');
    component.viajesForm.controls.destino.setValue('Cali');
    component.viajesForm.controls.terminado.setValue(true);
    component.viajesForm.controls.tipoCasa.setValue('Casa');
    component.viajesForm.controls.precios.setValue(100000);

    const result = component['crearEntidad']();

    expect(viaje).toEqual(result);
  });
});
