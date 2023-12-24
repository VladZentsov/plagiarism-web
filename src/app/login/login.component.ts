import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService} from '../services/auth/auth.service'
import {UserModel} from '../services/auth/UserModel'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ClientCookieService } from '../services/cookie/client-cookie.service';



@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [AuthService, ClientCookieService]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, 
    private authService: AuthService,
    private clientCookieService: ClientCookieService) {}

  login() {
    debugger;

    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.clientCookieService.setToken(response.jwtToken)
        this.router.navigate(['/work-upload']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
