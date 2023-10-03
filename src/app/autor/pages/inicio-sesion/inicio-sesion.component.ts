import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit{

  authToken: boolean = localStorage.getItem('authToken') === 'true';
  boolToken!: boolean;

  constructor(private authService: AuthService) { }

  
  ngOnInit(): void {
    if(this.authToken) {
      this.boolToken = true;
      this.authService.setAuthToken(this.boolToken);
    }else {
      this.authService.setAuthToken(false);
    }
  }


}
