import {inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRouteSnapshot, RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./books/books.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookService} from "../core/book.service";


const routes: Routes = [
  {path: '', component: BooksComponent},
  {
    path: ':id', component: BookDetailsComponent,
    resolve: {
      book: (route: ActivatedRouteSnapshot) => inject(BookService)
        .findBookById(route.params['id'])
    }
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class BookRoutingModule {
}

