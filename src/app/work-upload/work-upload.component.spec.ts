import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkUploadComponent } from './work-upload.component';

describe('WorkUploadComponent', () => {
  let component: WorkUploadComponent;
  let fixture: ComponentFixture<WorkUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
