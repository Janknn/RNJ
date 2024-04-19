// player.services.ts
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class PlayerService {
 private players: string[] = ['jerem','mae','anto','will'];
 private bonuses: string[] = ['Tour au turbo', 'Inazuma','Quitte ou double','Loto','']; // Ajout de "Inazuma"

 setPlayers(players: string[]) {
    this.players = players;
 }

 getPlayers(): string[] {
    return this.players;
 }

 generateBonus(): string[] {
   const selectedBonuses: string[] = [];

   // Parcourir tous les bonus
   for (let i = 0; i < this.bonuses.length; i++) {
       // Générer un nombre aléatoire entre 1 et 5
       const randomNumber = Math.floor(Math.random() * 5) + 1;

       // Si le nombre aléatoire est 1, ajouter le bonus à la liste des bonus sélectionnés
       if (randomNumber === 1) {
           selectedBonuses.push(this.bonuses[i]);
       }
   }

   return selectedBonuses;
   }
}