import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

username: string = '';
password: string = '';
showErrorAlert: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  Autentificacion(){
    if(this.username === 'admin' && this.password === 'admin'){
      this.router.navigate(['/principal']);
      this.authService.setAuthToken(true);
      console.log(this.authService.getAuthToken());
      
    } else {
      this.showErrorAlert = true;
      console.log(this.authService.getAuthToken())
    }
  }
}
