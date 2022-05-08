export class Usuarios{
    id: number;
    identificacion: number;
    nombre: string;
    apellido: string;
    usuario: string;
    clave: string;
    edad: number;
    tipoRol: number;
    ciudadResidencia: string;
    correoElectronico: string;
    fechaCreacion: string;

    constructor(id: number,identificacion: number,nombre: string,apellido: string,
      usuario: string,clave: string,edad: number,tipoRol: number,ciudadResidencia: string,
      correoElectronico: string,fechaCreacion: string){
        this.id=id;
        this.identificacion=identificacion;
        this.nombre=nombre;
        this.apellido=apellido;
        this.usuario=usuario;
        this.clave=clave;
        this.edad=edad;
        this.tipoRol=tipoRol;
        this.ciudadResidencia=ciudadResidencia;
        this.correoElectronico=correoElectronico;
        this.fechaCreacion=fechaCreacion;

    }
}
