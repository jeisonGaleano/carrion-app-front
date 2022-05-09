import { Vehiculo } from './../model/vehiculo';
import { environment } from './../../../../../../environments/environment';
import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { VehiculoService } from './vehiculo.service';
import { HttpResponse } from '@angular/common/http';

describe('VehiculoService', () => {
  let service: VehiculoService;
  let httpMock: HttpTestingController;
  const apiEndpointVehiculo = `${environment.endpoint}/vehiculo`;
 beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculoService);
  });

  it('deberia guardar vehiculos', () => {
    let listaVehiculo = new Vehiculo(1,
      1,
      'QHM960',
      'HYTSYY717',
      '717HAYHSH',
      17,
      1,
      2022,
      'Nissan');
    service.guardar(listaVehiculo).subscribe(vehiculo => {
      expect(vehiculo).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointVehiculo);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({ body: 1 }));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
