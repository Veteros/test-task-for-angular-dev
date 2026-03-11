import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../../../../libs/auth/feature/src/lib/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('../../../../libs/home/feature/src/lib/home.routes').then((m) => m.HOME_ROUTES),
  },

  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];
