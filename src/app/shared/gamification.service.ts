import { Injectable } from '@angular/core';
import { Gamification } from "./gamification.model";

@Injectable()
export class GamificationService {

  private gamification: Gamification[] = [
    new Gamification (0, true, "Ranking", 0, 'Ganhe pontos'),
    new Gamification (1, true, "Série C", 0, 'Responda por 2 dias consecutivos'),
    new Gamification (2, true, "Série B", 0, 'Responda por 7 dias consecutivos'),
    new Gamification (3, true, "Série A", 0, 'Responda por 30 dias consecutivos'),
    new Gamification (4, true, "Base", 0, 'Responda por 7 dias todas as perguntas'),
    new Gamification (5, true, "Reserva", 0, 'Responda por 15 dias todas as perguntas'),
    new Gamification (6, true, "Titular", 0, 'Responda por 30 dias todas as perguntas'),
    new Gamification (7, true, "Time", 0, 'Dias respondendo consectivamente'),
    new Gamification (8, true, "Rodada", 0, 'Semanas respondendo consectivamente')
    ];

  constructor() {}

  getGamification() {
      return this.gamification;
  }

}
