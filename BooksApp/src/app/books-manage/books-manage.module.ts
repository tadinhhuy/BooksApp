import { NgModule, Pipe } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksManageRoutingModule } from './books-manage-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { MaterialModule } from '../material/material.module';
import { BookEditComponent } from './book-edit/book-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { BookDefaultComponent } from './book-default/book-default.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { MessageComponent } from '../common/share/message/message.component';



@NgModule({
  declarations: [BooksListComponent, BookEditComponent, BookDefaultComponent, BookDetailComponent, CreateBookComponent,MessageComponent],
  imports: [
    CommonModule,
    BooksManageRoutingModule,
    MaterialModule,
    HttpClientModule,
    ObserversModule,
    FormsModule,
    ReactiveFormsModule,

    
  ]
})
export class BooksManageModule { }
