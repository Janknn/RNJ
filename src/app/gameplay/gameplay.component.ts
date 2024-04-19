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
export class GameplayComponent {
 currentPlayer: string = '';
 currentBonus: string | null = null;
 players: string[] = [];
 opponentChosen: boolean = false;
 chosenOpponent: string = '';
 taffes: number = 0;
 bonusFinished: boolean = false; // Initialisez bonusFinished à false pour afficher l'interface du bonus

 constructor(private playerService: PlayerService, private router: Router) { }

 generateRandomNumber(): number {
    return Math.floor(Math.random() * 5) + 1;
 }

 showPlayer() {
    this.players = this.playerService.getPlayers();
    if (this.players.length > 0) {
      this.currentPlayer = this.players[Math.floor(Math.random() * this.players.length)];
      this.currentBonus = this.playerService.generateBonus();
      this.opponentChosen = false;
      this.taffes = this.generateRandomNumber();
      this.bonusFinished = false; // Réinitialiser bonusFinished à false pour afficher l'interface du bonus
    }
 }

 chooseOpponent(opponent: string) {
    if (opponent !== this.currentPlayer) {
      this.chosenOpponent = opponent;
      this.opponentChosen = true;
    }
 }

 resolveDuel(winner: string, loser: string) {
    const winnerTaffes = this.generateRandomNumber();
    const loserTaffes = this.generateRandomNumber();
    if (winner === this.currentPlayer) {
      this.taffes *= 2;
    } else {
      this.currentPlayer = this.chosenOpponent;
    }
    this.opponentChosen = false;
    this.bonusFinished = true; // Définir bonusFinished à true lorsque le bonus est terminé
 }
}
