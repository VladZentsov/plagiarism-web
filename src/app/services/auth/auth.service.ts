import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './UserModel';
import {ConfigService} from '../../config.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private configService: ConfigService) {}

  login(Email: string, Password: string): Observable<UserModel> {
    const credentials = { Email, Password };
    debugger;
    return this.http.post<UserModel>(`${this.configService.apiUrl}/Login`, credentials);
  }
}