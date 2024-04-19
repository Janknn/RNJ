import { Routes } from '@angular/router';
import { SelectPlayerComponent } from './select-player/select-player.component';
import { GameplayComponent } from './gameplay/gameplay.component';

export const routes: Routes = [
  {
    path: 'lobby',
    component: SelectPlayerComponent,
  },
  {
    path: 'game',
    component: GameplayComponent,
  },
];
