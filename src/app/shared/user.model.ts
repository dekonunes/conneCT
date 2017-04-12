import { Question } from './question.model';
import { Gamification } from './gamification.model';
import { Answer } from './answer.model';

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
    public uidCT: string,
    public questions?: Question[]
    // public answers?: Answer[],
    // public gamification?: Gamification
    ) {
  }
}
