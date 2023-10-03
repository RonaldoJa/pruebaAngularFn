import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { LoginComponent } from '../components/login/login.component';
import { ComponentsModule } from '../components/components.module';
import { PaginaPremiunComponent } from './pagina-premiun/pagina-premiun.component';



@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    InicioSesionComponent,
    PaginaPremiunComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    PaginaPrincipalComponent,
    InicioSesionComponent,
    PaginaPremiunComponent
  ]
})
export class PagesModule { }
