export class Viaje {
  id: number;
  idUsuario: number;
  idConductor: number;
  toneladas: number;
  tipoVehiculo: number;
  fechaCreacion: string;
  fechaServicio: string;
  origen: string;
  destino: string;
  terminado: boolean;
  tipoCasa: string;
  precios: number;
  constructor( idUsuario: number, idConductor: number, toneladas: number,
    tipoVehiculo: number, fechaCreacion: string, fechaServicio: string, origen: string, destino: string,
    terminado: boolean, tipoCasa: string, precios: number,id?: number) {
      this.id=id;
      this.idUsuario=idUsuario;
      this.idConductor=idConductor;
      this.toneladas=toneladas;
      this.tipoVehiculo= tipoVehiculo;
      this.fechaCreacion= fechaCreacion;
      this.fechaServicio= fechaServicio;
      this.origen= origen;
      this.destino= destino;
      this.terminado= terminado;
      this.tipoCasa= tipoCasa;
      this.precios= precios;
  }
}
