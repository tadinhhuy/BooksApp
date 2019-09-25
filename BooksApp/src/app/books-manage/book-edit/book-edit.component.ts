import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService, BookItem } from 'src/app/service/books.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/common/message.service';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BooksService,
    private location: Location,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }


  bookID = + this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.createForm();
    this.setForm();
    
   
  }

  createForm(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      number: [ , Validators.required],
      date: [ , Validators.required],
    })
  }

  

  buttonBack(): void {
    this.location.back();
  }

  setForm() {
    this.bookService.getBook(this.bookID).subscribe(item => {
      if (item) {
        this.bookForm.setValue({
          title: item.title,
          author: item.author,
          number: item.number,
          date: item.date,
        })
      }
    })
  }

  formSubmit() {
    this.bookService.updateBook(this.bookID, this.bookForm.value).subscribe(() => {
      this.location.back();
      this.messageService.addMessage({messageType: "Success", messageDisplay: `Edit "${this.bookForm.value.title}" Successful !`});
    });
  }

}
