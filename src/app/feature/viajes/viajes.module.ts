import { SharedModule } from '@shared/shared.module';
import { CrearViajesComponent } from './components/crear-viajes/crear-viajes.component';
import { NgModule } from '@angular/core';
import { ListarViajesComponent } from './components/listar-viajes/listar-viajes.component';
import { ViajesRoutingModule } from './viajes-routing.module';
import { CommonModule } from '@angular/common';
import { ViajesComponent } from './components/viajes/viajes/viajes.component';



@NgModule({
  declarations: [
    CrearViajesComponent,
    ListarViajesComponent,
    ViajesComponent
  ],
  imports: [
    ViajesRoutingModule,
    CommonModule,
    SharedModule

  ]
})
export class ViajesModule { }
