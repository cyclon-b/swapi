import { AppComponent } from './app/app.component';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRoutes } from './app/root.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';


bootstrapApplication(AppComponent,
  {
    providers: [importProvidersFrom(RouterModule.forRoot(rootRoutes)), provideStore(), provideEffects(), provideRouterStore(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })],
  })
  .catch(err => console.error(err));
