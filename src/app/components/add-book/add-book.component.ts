import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookServicesService } from 'src/app/services/book-services.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addBookRequest: Book = {
    id: '',
    bookName: '',
    publisherName: '',
    age: 0,
    publishDate: new Date,
    page: 0,
    bookType: ''
  }

  constructor(private bookservices: BookServicesService, private router: Router) { }
  ngOnInit(): void { }

  addBooks(){
    //console.log(this.addEmployeeRequest);
    this.bookservices.addBook(this.addBookRequest).subscribe({
      next: (addBook) => {
        this.router.navigate(['lists']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
