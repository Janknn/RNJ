//select-player.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-select-player',
 standalone: true,
 imports: [ FormsModule, CommonModule ], // Supprimez PlayerService ici
 templateUrl: './select-player.component.html',
})
export class SelectPlayerComponent {
 newPlayerName: string = '';
 players: string[] = [];

 constructor(private playerService: PlayerService, private router: Router) { }

 addPlayer() {
    if (this.newPlayerName.trim() !== '') {
      this.players.push(this.newPlayerName);
      this.newPlayerName = ''; // Efface le champ d'entrée après l'ajout
    }
 }

 startGame() {
    this.playerService.setPlayers(this.players);
    this.router.navigate(['/game']);
 }
}