import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  { 
    path: 'add',
    component: AddBookComponent,
  },
  {
    path: 'lists',
    component: ListBooksComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
