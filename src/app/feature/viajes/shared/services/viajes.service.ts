import { HttpService } from 'src/app/core/services/http.service';
import { Viaje } from './../model/viaje';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(protected http: HttpService) {}

  public guardar(viaje: Viaje) {
    return this.http.doPost<Viaje, number>(`${environment.endpoint}/viaje`, viaje,
                                                this.http.optsName('crear/actualizar viaje'));
  }

  public consultar(idConductor:  string) {
    return this.http.doGet<Viaje[]>(`${environment.endpoint}/viajes/conductor-viajes/${idConductor}`,
                this.http.optsName('consultar viaje'));
  }

}
