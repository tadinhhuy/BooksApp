import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from 'src/app/service/books.service';
import { Location } from '@angular/common';
import { MessageService } from 'src/app/common/message.service';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  bookForm: FormGroup;
  constructor(
    private bookService: BooksService,
    private messageService: MessageService,
    private formbuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.bookForm = this.formbuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      number: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  buttonBack(){
    this.location.back();
  }

  createBook() {
    this.bookService.addBook(this.bookForm.value).subscribe(() => {
      this.location.back();
      this.messageService.addMessage({messageType: "Success", messageDisplay: `Save "${this.bookForm.value.title}" Successful !`});
    });
    
  }

}
