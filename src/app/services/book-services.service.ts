import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {
  baseApiUrl: string = environment.baseApiUrl; 

  constructor(private http: HttpClient) { }

  addBook(addBookRequest: Book): Observable<Book>{
    addBookRequest.id= '00000000-0000-0000-0000-000000000000';
    return this.http.post<Book>(this.baseApiUrl + 'api/Book', addBookRequest)
  }

  getBook(id: string): Observable<Book>{
    return this.http.get<Book>(this.baseApiUrl + 'api/Book/' + id);
  }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseApiUrl + 'api/Book');
  }

  getSearchedBooks(name: string, age: number): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseApiUrl + 'api/Book');
  }

  updateBook(id: string, updateBookRequest: Book): Observable<Book>{
    return this.http.put<Book>(this.baseApiUrl + 'api/Book/' + id, updateBookRequest);
  }

  deleteBook(id: string): Observable<Book>{
    return this.http.delete<Book>(this.baseApiUrl + 'api/Book/' + id);
  }
}
