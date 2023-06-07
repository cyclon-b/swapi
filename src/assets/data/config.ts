export const URL_CONFIG = {
  rootApi: 'https://swapi.dev/api/',
};

export const TOP_MENU_ITEMS = [
  { label: 'Home', icon: 'pi-home pi pi-fw', routerLink: [''] },
  {
    label: 'People',
    icon: 'pi-users pi pi-fw',
    routerLink: ['people', 'page', '1'],
  },
  {
    label: 'Planets',
    icon: 'pi-globe pi pi-fw',
    routerLink: ['planets'],
  },
  {
    label: 'Starships',
    icon: 'pi-caret-down pi pi-fw',
    routerLink: ['starships'],
  },
];

export const ROWS_PER_PAGE = 10;
