import { HomeComponent } from '@home/home.component';
import { LoginComponent } from './feature/login/components/login.component';
import { RegistroconductorComponent } from './feature/formularios/registroconductor/components/registroconductor/registroconductor.component';
import { RegistrouUsuariosComponent } from './feature/formularios/registrousuario/components/registrousuario/registrousuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [SecurityGuard]  },
  { path: 'registro-conductor', component: RegistroconductorComponent, canActivate: [SecurityGuard]  },
  { path: 'registro-usuario', component: RegistrouUsuariosComponent, canActivate: [SecurityGuard]  },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'viaje', loadChildren: () => import('@viajes/viajes.module').then(mod => mod.ViajesModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
