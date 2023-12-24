export class CompareResult {
    workName?:string;
    userName: string;
    userSurname: string;
    userGroupName: string;
    identicalLines: identicalLines[];
    workToCompare: ParsedWork;
    matchPercentage: number;
  
    constructor(data?: any) {
      this.workName = data.workName;
      this.userName = data.userName;
      this.userSurname = data.userSurname;
      this.userGroupName = data.userGroupName;
      this.identicalLines = data.identicalLines || [];
      this.workToCompare = data.workToCompare || null;
      this.matchPercentage = data.matchPercentage || 0;
    }
  }

  export class ParsedWork {
    id: string;
    codeLines: string[];
  
    constructor(data: any) {
      this.id = data.id || '';
      this.codeLines = data.codeLines || [];
    }
  }

  export class identicalLines {
    currentWorkLineNumber: number;
    workToCompareLineNumbers: number[];
  
    constructor(data: any) {
      this.currentWorkLineNumber = data.currentWorkLineNumber || 0;
      this.workToCompareLineNumbers = data.workToCompareLineNumbers || [];
    }
  }