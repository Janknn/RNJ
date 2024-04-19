// gameplay.component.ts
import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
 selector: 'app-gameplay',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './gameplay.component.html',
})
// gameplay.component.ts

export class GameplayComponent {
  currentPlayer: string = '';
  currentBonus: string[] = [];
  players: string[] = [];
  taffes: number = 0;
  bonusFinished: boolean = false;
  allPlayersTurn: number = 0; // Ajout d'une propriété pour le tour de tous les joueurs

  constructor(private playerService: PlayerService, private router: Router) { }

  generateRandomNumber(): number {
      return Math.floor(Math.random() * 5) + 1;
  }

  showPlayer() {
      this.players = this.playerService.getPlayers();
      if (this.players.length > 0) {
          // Générer un nombre aléatoire entre 1 et 7
          const randomNumberIND = Math.floor(Math.random() * 9) + 1;

          // Si le nombre aléatoire est 1, c'est un tour pour tous les joueurs
          if (randomNumberIND === 1) {
              this.allPlayersTurn = this.generateRandomNumber(); // Générer un nombre pour le tour de tous les joueurs
              this.currentPlayer = 'Tout le monde';
              this.currentBonus = []; // Réinitialiser les bonus pour le tour de tous les joueurs
          } else {
              this.currentPlayer = this.players[Math.floor(Math.random() * this.players.length)];
              this.currentBonus = this.playerService.generateBonus();
              this.taffes = this.generateRandomNumber();
              this.bonusFinished = false;
          }
      }
  }
}
