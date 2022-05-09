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

    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('deberia crear el objeto Viaje', () => {

    const viaje: Viaje = new Viaje(1,1,10,2,'2022-05-09',
    '2022-05-10','Barranquilla','Soledad',false,'Casa',120000);
    component.viajesForm.controls.idUsuario.setValue(1);
    component.viajesForm.controls.idConductor.setValue(1);
    component.viajesForm.controls.toneladas.setValue(10);
    component.viajesForm.controls.tipoVehiculo.setValue(2);
    component.viajesForm.controls.fechaServicio.setValue('2022-05-09');
    component.viajesForm.controls.fechaServicio.setValue('2022-05-10');
    component.viajesForm.controls.origen.setValue('Barranquilla');
    component.viajesForm.controls.destino.setValue('Soledad');
    component.viajesForm.controls.terminado.setValue(false);
    component.viajesForm.controls.tipoCasa.setValue('Casa');
    component.viajesForm.controls.precios.setValue(120000);
    const result = component['crearEntidad']();
    expect(viaje).toEqual(result);
  });
});
