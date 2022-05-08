import { EditarViajesComponent } from './components/editar-viajes/editar-viajes.component';
import { ListarViajesComponent } from './components/listar-viajes/listar-viajes.component';
import { CrearViajesComponent } from './components/crear-viajes/crear-viajes.component';
import { ViajesComponent } from './components/viajes/viajes/viajes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: ViajesComponent,
    children: [
      {
        path: 'crear',
        component: CrearViajesComponent
      },
      {
        path: 'listar',
        component: ListarViajesComponent
      },
      {
        path: 'editar',
        component: EditarViajesComponent
      }
    ]
  }
];

@NgModule({

  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class ViajesRoutingModule { }
