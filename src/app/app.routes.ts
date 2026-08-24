import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'basic',
        title: 'Pipes Basicos',
        loadComponent: () => import('./pages/basic-page/basic-page'),
    },
    {
        path: 'custom',
        title: 'custom pipes personalizados',
        loadComponent: () => import('./pages/custom-page/custom-page'),
    },
    {
        path: 'uncommon',
        title: 'Pipes no tan comunes',
        loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
    },
    {
        path: 'numbers',
        title: 'Numbers Pipe',
        loadComponent: () => import('./pages/numbers-page/numbers-page'),
    }
];
