import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BookItem, BooksService } from 'src/app/service/books.service';
import { MessageService } from 'src/app/common/message.service';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author', 'number', 'date', 'action'];

  dataSource = null;
  listBook: any = null;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private bookService: BooksService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getBooklist();
  }

  getBooklist(): void {
    this.bookService.getListBook().subscribe((items) => {
      this.listBook = items;
      this.dataSource = new MatTableDataSource(this.listBook);
      this.dataSource.sort = this.sort;
    });
  }

  deleteBook(id: number): void {
    if (confirm(`Are you sure you wanna delete Book Id: ' ${id} '?`)) {
      this.bookService.removeBook(id).subscribe(() => {
        this.messageService.addMessage({messageType: "Success", messageDisplay: `The Book Was Deleted !`});
        this.getBooklist();
      });
    }
  }



}
