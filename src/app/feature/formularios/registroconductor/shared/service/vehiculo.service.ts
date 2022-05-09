import { Vehiculo } from './../model/vehiculo';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(protected http: HttpService) {}

  public guardar(vehiculo: Vehiculo) {
    console.log(JSON.stringify(vehiculo))
    return this.http.doPost<Vehiculo, boolean>(`${environment.endpoint}/vehiculo`, vehiculo,
                                                this.http.optsName('crear/actualizar vehiculo'));
  }
}
