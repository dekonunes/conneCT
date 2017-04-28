import { Injectable } from '@angular/core';
import { Question } from "./question.model";

@Injectable()
export class QuestionService {

  private questions: Question[] = [
    new Question (0, true, "[Muito Preconceito, Bastante, Neutro , Pouco, Nenhum Preconceito]", 'Família', 'Como você se sente hoje no relacionamento com seus familiares?'),
    new Question (1, true, "[Muito Mal, Mal, Indiferente, Bem, Muito Bem]", 'Amigos', "Como você se sente hoje no relacionamento com seus amigos?"),
    new Question (2, true, "[Muito Mal, Mal, Indiferente, Bem, Muito Bem]", 'Colegas de trabalho', "Como você se sente hoje no relacionamento com seus colegas de trabalho?"),
    new Question (3, true, "[Muito Preconceito, Bastante, Neutro , Pouco, Nenhum Preconceito]", 'Preconceito', "Como você se sente hoje com relação ao preconceito que tem sofrido?"),
    new Question (4, true, "[Muita Fissura, Bastente, Neutro, Pouca, Nenhuma Fissura]", "Vontade de uso", "Como você se sente hoje com relação as “fissuras” ao longo do dia?" ),
    new Question (5, true, "[Muita Mudança, Bastante , Neutro , Pouca, Nenhuma Mudança]", 'Humor', "Como você se sente hoje com relação as possíveis mudanças no seu humor ao longo do dia?"),
    new Question (6, true, "[Nunca, Esporádico, Ocasional, Pouco frequente, Frequente]", "Contato com a CT", "Quão frequente tem sido o seu contato com a CT onde esteve acolhido?"),
    new Question (7, true, "[Nunca, Esporádico, Ocasional, Pouco frequente, Frequente]", "Contato com grupos de apoio", "Quão frequente tem sido o seu contato com entidades que auxiliam namanutenção?"),
    new Question (8, true, "[Nunca, Esporádico, Ocasional, Pouco frequente, Frequente]", 'Espiritualidade', "Quão frequente tem sido a sua preocupação com sua espiritualidade?"),
    new Question (9, true, "[Muito Preconceito, Bastante, Neutro , Pouco, Nenhum Preconceito]", 'Moradia', 'Como você se sente hoje no relacionamento com seus familiares?'),
    new Question (10, true, "[Muito Preconceito, Bastante, Neutro , Pouco, Nenhum Preconceito]", 'Emprego', 'Como você se sente hoje no relacionamento com seus familiares?'),
    new Question (11, true, "[Muito Preconceito, Bastante, Neutro , Pouco, Nenhum Preconceito]", 'Educação', 'Como você se sente hoje no relacionamento com seus familiares?'),
    new Question (12, true, "[Muito Preconceito, Bastante, Neutro , Pouco, Nenhum Preconceito]", 'Lazer', 'Como você se sente hoje no relacionamento com seus familiares?'),
    new Question (13, true, "[Muito Preconceito, Bastante, Neutro , Pouco, Nenhum Preconceito]", 'Esporte', 'Como você se sente hoje no relacionamento com seus familiares?'),
    new Question (14, true, "[Abandonei, Tomo quando acho que preciso, Tomo de vez em quando, Tomo quando lembro, Tomo Regularmente]", 'Medicação', 'Como você se sente hoje no relacionamento com seus familiares?')
  ];

  constructor() {}

  getQuestion() {
      return this.questions;
  }

}
