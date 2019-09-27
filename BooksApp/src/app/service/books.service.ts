import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';


export interface BookItem {
  id: number;
  title: string;
  author: string;
  number: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  private dataUrl: string = "http://localhost:3000/list/";


  listData: BookItem[] = [
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      number: 32,
      date: '1998/12/05',
      id: 1
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      number: 34,
      date: '1885/01/12'
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      number: 12,
      date: '2019/02/02',
      id: 3
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      number: 51,
      date: '2006/01/03',
      id: 4
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      number: 18,
      date: '2005/03/03',
      id: 5
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      number: 15,
      date: '1859/03/01',
      id: 6
    },
    {
      title: "To Kill a Mockingbir",
      author: "Alexander",
      number: 132,
      date: '2018/12/31',
      id: 16
    },
    {
      id: 21,
      title: "To Kill a Mockingbir",
      author: "Alexander",
      number: 13,
      date: '2018/12/31'
    }
  ];

  getListBook(): Observable<Object> {
    return of(this.listData);
  }

  addBook(value: BookItem): Observable<Object> {
    let result = this.listData.push(value);
    return of(result);
  }

  removeBook(id: number): Observable<BookItem[]> {
    let index = this.listData.findIndex(ele => ele.id === id);
    let result = this.listData.splice(index, 1);
    return of(result);
  }

  getBook(id: number): Observable<BookItem> {
    let result: BookItem = null;
    for (let data of this.listData) {
      if (data.id === id) {
        result = data;
        break;
      }
    }

    return of(result);
  }

  updateBook(id: number, value: BookItem): Observable<Object> {
    let result: BookItem = null;
    for (let data of this.listData) {
      if (data.id === id) {
        data.title = value.title;
        data.number = value.number;
        data.date = value.date;
        data.author = value.author;
        result = data;
        break;
      }
    }
    return of(result);
  }


}
