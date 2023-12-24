export class FullWorkResult {
    id: string;
    code: string;
    workType: workType;
    workName: string;
  
    constructor(id: string, code: string, workType: workType, workName: string) {
      this.id = id;
      this.code = code;
      this.workType = workType;
      this.workName = workName;
    }
  }

  export enum workType {
    cs
  }