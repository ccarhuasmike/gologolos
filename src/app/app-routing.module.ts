// import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/view/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../app/view/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../app/view/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('../app/view/contact/contact.module').then(m => m.ContactModule)
  }
];
export const AppRoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes);
// @NgModule({
//   imports: [RouterModule.forRoot(routes, {
//     initialNavigation: 'disabled'
// })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
