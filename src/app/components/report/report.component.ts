import { Component, Input, OnInit, getNgModuleById } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookServicesService } from 'src/app/services/book-services.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  books: Book[] = [];

  addBookRequest: Book = {
    id: '',
    bookName: '',
    publisherName: '',
    age: 0,
    publishDate: new Date,
    page: 0,
    bookType: ''
  }

  constructor(private bookServices: BookServicesService, private router: Router) { }
  ngOnInit(): void {
    this.bookServices.getAllBooks()
      .subscribe({
        next: (books) => {
          //console.log(employees);
          this.books = books;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  searchBooks(){
    this.bookServices.getSearchedBooks(this.addBookRequest.bookName, this.addBookRequest.age)
      .subscribe({
        next: (books) => {
          //console.log(employees);
          this.books = books;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }
}
