import { Component, Input } from '@angular/core';
import { CompareResult } from '../services/work/CompareResult';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compare-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compare-result.component.html',
  styleUrl: './compare-result.component.scss'
})
export class CompareResultsListComponent {
  @Input() compareResult: CompareResult = new CompareResult(); 
}