import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login/librarian',
    loadComponent: () =>
      import(
        '../app/components/Auth/auth-librarian/auth-librarian.component'
      ).then((auth) => auth.AuthLibrarianComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../app/components/Auth/auth/auth.component').then(
        (auth) => auth.AuthComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../app/components/dashboard/dashboard.component').then(
        (dash) => dash.DashboardComponent
      ),
  },
  {
    path: 'book/:id',
    loadComponent: () =>
      import('../app/components/dashboard/book-page/book-page.component').then(
        (book) => book.BookPageComponent
      ),
  },
  {
    path: 'librarian',
    loadComponent: () =>
      import(
        '../app/components/librarian-dashboard/librarian-dashboard.component'
      ).then((dash) => dash.LibrarianDashboardComponent),
  },
];
