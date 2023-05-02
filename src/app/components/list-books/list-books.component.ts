import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookServicesService } from 'src/app/services/book-services.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books: Book[] = [];

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

  deleteBook(id: string) {
    this.bookServices.deleteBook(id).subscribe({
      next: (result) => {
        //this.router.navigate(['employees']);
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
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
