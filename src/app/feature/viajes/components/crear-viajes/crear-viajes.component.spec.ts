import { LoginService } from './../../../login/shared/service/service/login.service';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './../../../../core/services/http.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ViajesService } from '@viajes/shared/services/viajes.service';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViajesComponent } from './crear-viajes.component';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrearViajesComponent', () => {
  let component: CrearViajesComponent;
  let fixture: ComponentFixture<CrearViajesComponent>;
  let router: Router;
  let viajeService: ViajesService;
  let loginService: LoginService;
  const usuario : any='{"id":1}';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearViajesComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, CommonModule, FormsModule, ReactiveFormsModule],
      providers: [ViajesService, LoginService, HttpService, NgbModal],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearViajesComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    viajeService = TestBed.inject(ViajesService);
    router = TestBed.inject(Router);
    spyOn(loginService,'obtenerDatos').and.returnValue(usuario);
    spyOn(viajeService, 'guardar').and.returnValue(of(null));
    spyOn(router, 'navigate');
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('deberia guardar el viaje', async () => {
    component.viajesForm.controls.id.setValue(1);
    component.viajesForm.controls.idConductor.setValue(1);
    component.viajesForm.controls.toneladas.setValue(12);
    component.viajesForm.controls.tipoVehiculo.setValue(1);
    component.viajesForm.controls.fechaServicio.setValue('2022/05/10');
    component.viajesForm.controls.origen.setValue('Barranquilla');
    component.viajesForm.controls.destino.setValue('Soledad');
    component.viajesForm.controls.terminado.setValue(false);
    component.viajesForm.controls.tipoCasa.setValue('Casa');
    component.viajesForm.controls.precios.setValue(120000);
    expect(component.viajesForm.valid).toBeTruthy();
    component.crear();
  });

});
