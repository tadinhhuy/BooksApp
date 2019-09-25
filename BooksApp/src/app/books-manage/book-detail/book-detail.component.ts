import { Component, OnInit } from '@angular/core';
import { BooksService, BookItem } from 'src/app/service/books.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: BookItem;


  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  bookID = + this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.getBookData();
  }

  getBookData() {
    this.bookService.getBook(this.bookID).subscribe(val => {
      this.book = val;
    })
  }

  buttonBack(): void {
    this.location.back();
  }


 


}
