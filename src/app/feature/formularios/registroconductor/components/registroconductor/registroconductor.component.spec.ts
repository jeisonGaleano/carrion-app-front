import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroconductorComponent } from './registroconductor.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoService } from '../../shared/service/vehiculo.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehiculo } from '../../shared/model/vehiculo';


describe('RegistroconductorComponent', () => {
  let component: RegistroconductorComponent;
  let fixture: ComponentFixture<RegistroconductorComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroconductorComponent ],
      imports: [HttpClientModule, RouterTestingModule, CommonModule, FormsModule, ReactiveFormsModule],
      providers: [VehiculoService, HttpService, NgbModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroconductorComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia crear el objeto Usuario', () => {

    const vehiculo: Vehiculo = new Vehiculo(
      1,
      'WHM879',
      'KAKJND002',
      'JNJHHSKK111',
      18,
      1,
      2020,
      'Nissan'
    );
    component.registroVehiculoForm.controls.idConductor.setValue(112312222);
    component.registroVehiculoForm.controls.idConductor.setValue('Json');
    component.registroVehiculoForm.controls.numeroMotor.setValue('Galeano');
    component.registroVehiculoForm.controls.numeroChasis.setValue('JsonGB');
    component.registroVehiculoForm.controls.toneladas.setValue('JsonGb1');
    component.registroVehiculoForm.controls.tipoVehiculo.setValue(11);
    component.registroVehiculoForm.controls.modelo.setValue(1);
    component.registroVehiculoForm.controls.marca.setValue('Barranquilla');
    const result = component['crearEntidad']();
    expect(vehiculo).toEqual(result);
  });
});
