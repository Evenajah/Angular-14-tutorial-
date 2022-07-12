import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'contact',
        pathMatch: 'full',
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];
