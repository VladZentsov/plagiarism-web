import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ClientCookieService {
  constructor(private ngxCookieService: CookieService) {}

  getCookie(key: string): string {
    return this.ngxCookieService.get(key);
  }

  setCookie(key: string, value: string, expires?: number | Date, path?: string): void {
    this.ngxCookieService.set(key, value, expires, path);
  }

  deleteCookie(key: string, path?: string): void {
    this.ngxCookieService.delete(key, path);
  }

  setToken(token: string): void {
    // Здесь вы можете сохранить JWT-токен в локальном хранилище или в куках
    //localStorage.setItem('jwtToken', token);
    this.setCookie('jwtToken', token);
  }

  getToken(): string | null {
    // Здесь вы можете получить JWT-токен из локального хранилища или кук
    return this.getCookie('jwtToken');
    //return localStorage.getItem('jwtToken');
  }
}
