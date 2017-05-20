import { Injectable } from '@angular/core';
import { Gamification } from "./gamification.model";

@Injectable()
export class GamificationService {

  private gamification: Gamification[] = [
    new Gamification (0, false, "Ranking", 0, 'Ganhe pontos'),
    new Gamification (1, false, "Série C", 0, 'Responda por 2 dias consecutivos'),
    new Gamification (2, false, "Série B", 0, 'Responda por 7 dias consecutivos'),
    new Gamification (3, false, "Série A", 0, 'Responda por 30 dias consecutivos'),
    new Gamification (4, false, "Base", 0, 'Responda por 7 dias todas as perguntas'),
    new Gamification (5, false, "Reserva", 0, 'Responda por 15 dias todas as perguntas'),
    new Gamification (6, false, "Titular", 0, 'Responda por 30 dias todas as perguntas'),
    new Gamification (7, false, "Time", 0, 'Dias respondendo consectivamente'),
    new Gamification (8, false, "Rodada", 0, 'Semanas respondendo consectivamente'),
    new Gamification (9, true, "Troféu", 0, 'A cada dia você recebe uma nova parte do troféu')
    ];

  constructor() {}

  getGamification() {
      return this.gamification;
  }

}
