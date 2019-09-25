import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



export interface BookItem {
  id: number;
  title: string;
  author: string;
  number: number;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  private dataUrl: string = "http://localhost:3000/list/";


  addBook(value: Object): Observable<Object> {
    return this.http.post(this.dataUrl, value);
  }

  removeBook(id: number): Observable<Object> {
    return this.http.delete(this.dataUrl + id)
  }

  getBook(id: number): Observable<any> {
    return this.http.get(this.dataUrl + id)
  }

  updateBook(id: number, value: BookItem): Observable<Object> {
    return this.http.put(this.dataUrl + id, value);
  }

  getListBook(): Observable<Object> {
    return this.http.get<BookItem>(this.dataUrl);
  }




}
