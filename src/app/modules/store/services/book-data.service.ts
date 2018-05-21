import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {RestUrls} from "../../../constants/rest-urls";
import {Book} from "../../../models/classes/book";
import {ApiService} from "../../../services/api-service";

@Injectable()
export class BookDataService {

  constructor(private apiService: ApiService) { }

  getAllBooks(): Observable<Book[]> {
    return this.apiService.get<Book[]>(`${RestUrls.books}`);
  }
  getBook(bookId: number): Observable<Book> {
    return this.apiService.get<Book>(`${RestUrls.books}/${bookId}`);
  }
  updateBook(book: Book): Observable<Book> {
    return this.apiService.put<Book>(`${RestUrls.books}/${book.ID}`, book);
  }
  deleteBook(bookId: number): Observable<any> {
    return this.apiService.get<Book>(`${RestUrls.books}/${bookId}`);
  }
  addBook(book: Book): Observable<Book> {
    return this.apiService.post<Book>(`${RestUrls.books}`, book);
  }
}
