import { Viaje } from './../model/viaje';
import { environment } from './../../../../../environments/environment';
import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ViajesService } from './viajes.service';
import { HttpResponse } from '@angular/common/http';

describe('ViajesService', () => {
  let service: ViajesService;
  let httpMock: HttpTestingController;
  const apiEndpointViaje = `${environment.endpoint}/viaje`;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajesService);
  });


  it('deberia guardar viajes', () => {
    let listaLogin = new Viaje(1,1,1,10,2,'2022-05-09',
      '2022-05-10','Barranquilla','Soledad',false,'Casa',120000);
    service.guardar(listaLogin).subscribe(login => {
      expect(login).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointViaje);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({ body: 1 }));
  });


  it('deberia listar Viaje', () => {
    const listaReservas: Viaje[] = [
      {
        id: 1,
        idUsuario: 1,
        idConductor: 1,
        toneladas: 12,
        tipoVehiculo: 1,
        fechaCreacion: '2022-05-09',
        fechaServicio: '2022-05-10',
        origen: 'Cali',
        destino: 'Barranquilla',
        terminado: true,
        tipoCasa: 'Casa',
        precios: 120000
      }
    ];

    service.consultar(1).subscribe(viaje => {
      expect(viaje.length).toBe(1);
      expect(viaje).toEqual(listaReservas);
    });
    const req = httpMock.expectOne(apiEndpointViaje);
    expect(req.request.method).toBe('GET');
    req.flush(listaReservas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
