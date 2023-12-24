import { Component, ChangeDetectorRef  } from '@angular/core';
import {WorkService} from '../services/work/work.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {AuthInterceptor} from '../auth.interceptor'
import { FullWorkResult } from '../services/work/FullWorkResult';
import { CompareToAllWorksResult } from '../services/work/CompareToAllWorksResult';
import { CompareResultsListComponent } from '../compare-result/compare-result.component';

@Component({
  selector: 'app-work-upload',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CompareResultsListComponent],
  templateUrl: './work-upload.component.html',
  styleUrl: './work-upload.component.scss',
  providers: [
    WorkService
  ]
})
export class WorkUploadComponent {
  selectedFile: File | null = null;
  fullWorkResult: FullWorkResult | null = null;
  responseText: string = '';
  compareToAllWorksResult: CompareToAllWorksResult | null = null;
  constructor(private workService: WorkService, private cdr: ChangeDetectorRef) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadFile() {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.workService.uploadFile(this.selectedFile).subscribe(
      (response) => {
        this.responseText = response.code;
        this.fullWorkResult = response;
      },
      (error) => {
        console.error('Error uploading file', error);
      }
    );
  }

  compareToAllWorks(): void{
    if(this.fullWorkResult!=null){
      this.workService.compareToAllWorks(this.fullWorkResult.id).subscribe(
        (response) => {
          this.compareToAllWorksResult = response;
          // Выполните необходимые действия с данными
          console.log('Data loaded:', this.compareToAllWorksResult);
          debugger;
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }
}
