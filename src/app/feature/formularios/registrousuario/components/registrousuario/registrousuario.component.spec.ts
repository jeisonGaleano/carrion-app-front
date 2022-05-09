import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegistrouUsuariosComponent } from './registrousuario.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { UsuariosService } from '../../shared/service/usuarios.service';
import { Router } from '@angular/router';
import { Usuarios } from '../../shared/model/usuarios';


describe('RegistrousuarioComponent', () => {
  let component: RegistrouUsuariosComponent;
  let fixture: ComponentFixture<RegistrouUsuariosComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrouUsuariosComponent ],
      imports: [HttpClientModule, RouterTestingModule, CommonModule, FormsModule, ReactiveFormsModule],
      providers: [UsuariosService, HttpService, NgbModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrouUsuariosComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia crear el objeto Usuario', () => {

    const usuarios: Usuarios = new Usuarios(
      112312222,
      'Json',
      'Galeano',
      'JsonGB',
      'JsonGb1',
      11,
      1,
      'Barranquilla',
      'Jgaleano@gmail.com',
      '2022-05-09');
    component.registroUsuariosForm.controls.identificacion.setValue(112312222);
    component.registroUsuariosForm.controls.nombre.setValue('Json');
    component.registroUsuariosForm.controls.apellido.setValue('Galeano');
    component.registroUsuariosForm.controls.usuario.setValue('JsonGB');
    component.registroUsuariosForm.controls.clave.setValue('JsonGb1');
    component.registroUsuariosForm.controls.edad.setValue(11);
    component.registroUsuariosForm.controls.tipoRol.setValue(1);
    component.registroUsuariosForm.controls.ciudadResidencia.setValue('Barranquilla');
    component.registroUsuariosForm.controls.correoElectronico.setValue('Jgaleano@gmail.com');
    component.registroUsuariosForm.controls.fechaCreacion.setValue('2022-05-09');
    const result = component['crearEntidad']();
    expect(usuarios).toEqual(result);
  });
});
