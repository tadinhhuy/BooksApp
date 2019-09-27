import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'book', 
    loadChildren: () => import('./books-manage/books-manage.module').then(mod => mod.BooksManageModule) 
  },
  {
    path: 'license',
    loadChildren: () => import('./license-manage/license-manage.module').then(mod => mod.LicenseManageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
