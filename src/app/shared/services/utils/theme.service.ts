import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, mergeMap, startWith } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private _document: Document) {}

  public switchTheme() {
    const themeLink = this._document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    const window = this._document.defaultView;
    const darkMediaQuery: MediaQueryList = window?.matchMedia(
      '(prefers-color-scheme: dark)'
    ) as MediaQueryList;
    const lightMediaQuery: MediaQueryList = window?.matchMedia(
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
            themeLink.href = 'md-dark-indigo.css';
          }
          if (currentTheme.light) {
            themeLink.href = 'md-light-indigo.css';
          }
        }
      });
  }
}
