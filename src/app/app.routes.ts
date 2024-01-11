import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component'),
//Since we use the default export on the home component, we supply it like that to the loadComponent
    },
//we supply the id with the details page. We will add the id to the todos now
    {
        path: 'detail/:id',
        loadComponent: () => import('./detail/detail.component'),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
