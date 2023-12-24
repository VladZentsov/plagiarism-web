import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConfigService} from '../../config.service';
import { FullWorkResult } from './FullWorkResult';
import { CompareToAllWorksResult } from './CompareToAllWorksResult';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http: HttpClient, private configService: ConfigService) {}

  uploadFile(file: File): Observable<FullWorkResult> {
    const formData = new FormData();
    formData.append('file', file);

    const result = this.http.post<FullWorkResult>(`${this.configService.apiUrl}/UploadWork`, formData);
    console.log(result);
    return result;
  }

  compareToAllWorks(currentWorkId: string): Observable<CompareToAllWorksResult>{
    const url = `${this.configService.apiUrl}/CompareToAll/${currentWorkId}`;
    const result = this.http.get<CompareToAllWorksResult>(url);
    console.log(result);
    return result;
  }
}
