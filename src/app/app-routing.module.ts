import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'biblioteca',
    loadChildren: () => import('./tabs/biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
  },
  {
    path: 'busca',
    loadChildren: () => import('./tabs/busca/busca.module').then( m => m.BuscaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./tabs/inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
