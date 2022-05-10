import { Component, OnInit } from '@angular/core';
import { Viaje } from '@viajes/shared/model/viaje';
import { ViajesService } from '@viajes/shared/services/viajes.service';
import { LoginService } from 'src/app/feature/login/shared/service/service/login.service';

@Component({
  selector: 'app-listar-viajes',
  templateUrl: './listar-viajes.component.html',
  styleUrls: ['./listar-viajes.component.css']
})
export class ListarViajesComponent implements OnInit {
  public titulo: string = 'Listar Viajes Conductor';
  public encabezadoTabla: string[] = ['id', 'toneladas', 'fecha servicio', 'origen', 'destino', 'tipo casa', 'precio'];

  listaViajesConductor: Viaje[] = [];

  constructor(protected viajesServices: ViajesService,protected loginService: LoginService) { }

  ngOnInit(): void {
    this.listarViajes();
  }

  private listarViajes(){
    let datos = this.loginService.obtenerDatos();
    let jsonDatos = JSON.parse(datos);
    this.viajesServices.consultar(jsonDatos.id).subscribe(datosRespuesta => {
      this.listaViajesConductor=datosRespuesta;
      console.log(datosRespuesta)
    })
  }
}
