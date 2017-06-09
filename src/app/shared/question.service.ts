import { Injectable } from '@angular/core';
import { Question } from "./question.model";

@Injectable()
export class QuestionService {

  private questions: Question[] = [
    new Question (0, true, "[Me levam a usar, Me leva a pensar em usar, Indiferente, Apoio Parcial, Apoio Constante/De Todos]", 'Família', 'Quanto aos seus familiares (parentes, parceiros e filhos) têm sido um apoio para que você não use drogas?'),
    new Question (1, true, "[Me levam a usar, Me leva a pensar em usar, Indiferente, Apoio Parcial, Apoio Constante/De Todos]", 'Amigos', "Quanto aos seus amigos tem lhe dado apoio para sua recuperação?"),
    new Question (2, true, "[Me levam a usar, Me leva a pensar em usar, Indiferente, Apoio Parcial, Apoio Constante/De Todos]", 'Colegas de trabalho', "Quanto aos seus colegas de trabalho tem lhe dado apoio para sua recuperação"),
    new Question (3, true, "[Muito Preconceito, Bastante, Neutro , Pouco, Nenhum Preconceito]", 'Preconceito', "Como você se sente hoje com relação ao preconceito que tem sofrido?"),
    new Question (4, true, "[Muita Fissura, Bastante, Neutro, Pouca, Nenhuma Fissura]", "Vontade de uso", "Como você se sente hoje com relação as “fissuras” ao longo do dia?" ),
    new Question (5, true, "[Estou muito mal, Tenho sofrido e não tenho aguentado, Não tenho mudanças de humor, Tenho sofrido e aguentado, Dou conta delas]", 'Humor', "Como você se sente hoje em relação às mudanças no seu humor ao longo do dia?"),
    new Question (6, true, "[Nunca, Às vezes, Mensalmente, Quinzenalmente, Toda Semana]", "Contato com a CT", "Quão frequente tem sido o seu contato com a CT onde esteve acolhido?"),
    new Question (7, true, "[Nunca, Às vezes, Mensalmente, Quinzenalmente, Toda Semana]", "Grupos de apoio", "Quão frequente tem sido o seu contato com entidades que auxiliam namanutenção?"),
    new Question (8, true, "[Nunca, Às vezes, Mensalmente, Quinzenalmente, Toda Semana]", 'Espiritualidade', "Quão frequente tem sido a sua preocupação com sua espiritualidade?"),
    new Question (9, true, "[Na rua, Morando em Abrigo, Morando de Favor em amigos/parentes, Casa alugada, Casa própria]", 'Moradia', 'Qual a sua condição atual de moradia?'),
    new Question (10, true, "[Desempregado, Desempregado mas Buscando, Trabalhando por conta própria, Empregado mas insatisfeito, Empregado e Satisfeito]", 'Emprego', 'Qual a sua condição atual de emprego?'),
    new Question (11, true, "[Não estou procurando, Procuro às Vezes, Estou procurando cursos, Estou fazendo curso, Já Tenho Profissão Bem Definida]", 'Capacitação', 'Qual a sua condição atual de Profissionalização?'),
    new Question (12, true, "[Nunca, Às vezes, Mensalmente, Quinzenalmente, Toda Semana]", 'Lazer', 'Quão frequente tem sido suas atividades de lazer ou artística?'),
    new Question (13, true, "[Nunca, Às vezes, Mensalmente, Quinzenalmente, Toda Semana]", 'Esporte', 'Quão frequente tem sido suas atividades esportivas?'),
    new Question (14, true, "[Abandonei; Tomo quando acho que preciso; Tomo quando lembro; Tomo Regularmente, Não me foram receitados remédios]", 'Medicação', 'Quão frequente tem sido sua a medicação?')
  ];

  constructor() {}

  getQuestion() {
      return this.questions;
  }

}
