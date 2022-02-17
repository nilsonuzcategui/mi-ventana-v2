import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { PagosPage } from './pages/pagos/pagos.page';
import { PlanesPage } from './pages/planes/planes.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'servicios/planes',
        component: PlanesPage
      },
      {
        path: 'pagos',
        component: PagosPage
      },
    ]
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
