import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientCookieService } from './services/cookie/client-cookie.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private clientCookieService: ClientCookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Получаем токен из AuthService
    debugger;
    const authToken = this.clientCookieService.getToken();

    // Клонируем запрос и добавляем заголовок Authorization
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Пропускаем запрос через следующий обработчик
    return next.handle(authReq);
  }
}