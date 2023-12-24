import { CompareResult, ParsedWork } from './CompareResult';

export class CompareToAllWorksResult {
  currentWork: ParsedWork;
  compareResults: CompareResult[];

  constructor(data: any) {
    this.currentWork = data.currentWork || new ParsedWork({});
    this.compareResults = data.compareResults.map((result: any) => new CompareResult(result)) || [];
  }
}