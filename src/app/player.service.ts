// player.services.ts
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class PlayerService {
 private players: string[] = [];
 private bonuses: string[] = ['Tour au turbo', 'Inazuma']; // Ajout de "Inazuma"

 setPlayers(players: string[]) {
    this.players = players;
 }

 getPlayers(): string[] {
    return this.players;
 }

 generateBonus(): string | null {
    // Génération d'un bonus aléatoirement, avec une chance de ne rien générer
    if (Math.random() < 0.5) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * this.bonuses.length);
    return this.bonuses[randomIndex];
 }
}
