import { AppComponent } from './app/app.component';
import { APP_INITIALIZER, importProvidersFrom, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRoutes } from './app/root.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { rootReducer } from './app/store/root-store.reducer';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerModule, NGXLogger, NgxLoggerLevel } from 'ngx-logger';
import { ThemeService } from './app/shared/services/utils/theme.service';
import { RootStoreFacade } from './app/store/root-store.facade';
import { RootStoreEffects } from './app/store/root-store.effects';

export function configInitFactory(rootFacade: RootStoreFacade): () => void {
  return () => rootFacade.getUrlConfig();
}

export function themeDetectionInitFactory(
  themeService: ThemeService,
  logger: NGXLogger
): () => void {
  try {
    return () => {
      themeService.switchTheme();
    };
  } catch (e) {
    logger.error(e);
    return () => {};
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(rootRoutes)),
    importProvidersFrom(
      LoggerModule.forRoot({
        level: NgxLoggerLevel.DEBUG,
        serverLogLevel: NgxLoggerLevel.ERROR,
      })
    ),
    importProvidersFrom(FormsModule),
    importProvidersFrom(ReactiveFormsModule),
    provideStore({ root: rootReducer }),
    provideEffects([RootStoreEffects]),
    provideRouterStore(),
    provideHttpClient(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    {
      provide: APP_INITIALIZER,
      useFactory: configInitFactory,
      deps: [RootStoreFacade],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: themeDetectionInitFactory,
      deps: [ThemeService],
      multi: true,
    },
  ],
}).catch(err => console.error(err));
