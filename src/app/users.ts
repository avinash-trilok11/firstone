export class Users {
  id: string;
  FullName: string;
  ObtainedMarks: string;

  constructor(id: string, FullName: string, ObtainedMarks: string) {
    this.id = id;
    this.FullName = FullName;
    this.ObtainedMarks = ObtainedMarks;
  }
}
