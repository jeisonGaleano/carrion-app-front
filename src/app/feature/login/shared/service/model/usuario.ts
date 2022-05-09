export class Usuario {
    id: number;
    idRol: number;
    usuario: string;
    clave: string;

    constructor(id?: number,
      idRol?: number,
      usuario?: string,
      clave?: string)
      {
        this.id=id;
        this.idRol=idRol;
        this.usuario=usuario;
        this.clave=clave;
      }
}
