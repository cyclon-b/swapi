import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { EffectsModule } from '@ngrx/effects';
import { HomeStoreEffects } from './home-store.effects';

export const homeRoutes: Routes = [
  {path: '', component: HomeComponent}
]
