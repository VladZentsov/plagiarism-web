import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
};
