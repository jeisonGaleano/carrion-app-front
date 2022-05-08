import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Trm } from '../Model/trm';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Trm>(`${environment.endpoint}/trm`, this.http.optsName('consultar TRM'));
  }
}
