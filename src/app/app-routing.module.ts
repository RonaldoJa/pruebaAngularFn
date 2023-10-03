import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './autor/pages/pagina-principal/pagina-principal.component';
import { LoginComponent } from './autor/components/login/login.component';
import { InicioSesionComponent } from './autor/pages/inicio-sesion/inicio-sesion.component';
import { PaginaPremiunComponent } from './autor/pages/pagina-premiun/pagina-premiun.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'principal', component: PaginaPrincipalComponent},
  {path: 'login', component: InicioSesionComponent},
  {path: 'premiun', component: PaginaPremiunComponent, canActivate: [authGuard]},
  {path: '', redirectTo: '/principal', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
