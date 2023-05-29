import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, mergeMap, startWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { WINDOW } from '../../providers/window.provider';

const THEME_WRAPPER_ID = 'app-theme';
const DARK_THEME_NAME = 'md-dark-indigo.css';
const LIGHT_THEME_NAME = 'md-light-indigo.css';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(
    @Inject(WINDOW) private _window: (Window & typeof globalThis) | null,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  public switchTheme() {
    const themeLink = this._document.getElementById(
      THEME_WRAPPER_ID
    ) as HTMLLinkElement;
    const darkMediaQuery: MediaQueryList = this._window?.matchMedia(
      '(prefers-color-scheme: dark)'
    ) as MediaQueryList;
    const lightMediaQuery: MediaQueryList = this._window?.matchMedia(
      '(prefers-color-scheme: light)'
    ) as MediaQueryList;
    fromEvent<MediaQueryList>(darkMediaQuery, 'change')
      .pipe(
        startWith(darkMediaQuery),
        map((list: MediaQueryList) => list.matches),
        mergeMap(darkEvent =>
          fromEvent<MediaQueryList>(lightMediaQuery, 'change').pipe(
            startWith(lightMediaQuery),
            map((list: MediaQueryList) => list.matches),
            map(lightEvent => ({
              dark: darkEvent,
              light: lightEvent,
            }))
          )
        )
      )
      .subscribe(currentTheme => {
        if (themeLink) {
          if (currentTheme.dark) {
            themeLink.href = DARK_THEME_NAME;
          }
          if (currentTheme.light) {
            themeLink.href = LIGHT_THEME_NAME;
          }
        }
      });
  }
}
