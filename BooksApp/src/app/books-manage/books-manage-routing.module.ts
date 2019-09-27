import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDefaultComponent } from './book-default/book-default.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
  {
    path: '',
    component: BookDefaultComponent, 
    children: [
      { path: 'list', component: BooksListComponent },
      { path: 'create', component: CreateBookComponent },
      { path: 'edit/:id', component: BookEditComponent },
      {path: 'view/:id',component: BookDetailComponent}
    ]
  }

];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksManageRoutingModule { }
