import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./books/books.component";
import {NewsComponent} from "./news/news.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'news', component: NewsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
  , exports: [RouterModule]
})
export class AppRoutingModule {
}
