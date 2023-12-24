import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ClientCookieService } from '../cookie/client-cookie.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private cookieService: ClientCookieService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authToken = this.cookieService.getCookie('jwtToken');

    if (!authToken) {
      this.router.navigate(['/login']); // Перенаправление на страницу логина
      return false;
    }

    return true;
  }
}
