import { Question } from './question.model';
import { Gamification } from './gamification.model';

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public telephone: number,
    public telephoneOther: number,
    public gender: string,
    public birthday: string,
    public questions?: Question[],
    ) {
  }
}
