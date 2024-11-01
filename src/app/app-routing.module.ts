import {inject, NgModule} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ActivatedRouteSnapshot, RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./books/books.component";
import {NewsComponent} from "./news/news.component";
import {HomeComponent} from "./home/home.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookService} from "./book.service";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {
    path: 'books/:id', component: BookDetailsComponent,
    resolve: {
      book: (route: ActivatedRouteSnapshot) => inject(BookService)
        .findBookById(route.params['id'])
    }
  },
  {path: 'news', component: NewsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule {
}
