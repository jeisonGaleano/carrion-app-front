import { of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ViajesService } from '@viajes/shared/services/viajes.service';

import { ListarViajesComponent } from './listar-viajes.component';
import { Viaje } from '@viajes/shared/model/viaje';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from 'src/app/feature/login/shared/service/service/login.service';

describe('ListarViajesComponent', () => {
  let component: ListarViajesComponent;
  let fixture: ComponentFixture<ListarViajesComponent>;
  let router: Router;
  let service: ViajesService;
  let viaje: Viaje[] = [];
  let loginService: LoginService;
  const usuario : any='{"id":1}';


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarViajesComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, CommonModule, FormsModule, ReactiveFormsModule],
      providers: [ViajesService, HttpService, NgbModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarViajesComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    service = TestBed.inject(ViajesService);
    spyOn(service, 'consultar').and.returnValue(of(viaje));
    spyOn(loginService,'obtenerDatos').and.returnValue(usuario);
    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
