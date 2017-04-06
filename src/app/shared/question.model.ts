export class Question {
  constructor(
    public id: number,
    public isActive: boolean,
    public answers: string,
    public title: string,
    public description: string) {
  }
}
