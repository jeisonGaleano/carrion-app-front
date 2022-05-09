import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ViajesService } from '@viajes/shared/services/viajes.service';

import { ListarViajesComponent } from './listar-viajes.component';

describe('ListarViajesComponent', () => {
  let component: ListarViajesComponent;
  let fixture: ComponentFixture<ListarViajesComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarViajesComponent ],
      imports: [HttpClientModule, RouterTestingModule, CommonModule, FormsModule, ReactiveFormsModule],
      providers: [ViajesService, HttpService, NgbModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarViajesComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
