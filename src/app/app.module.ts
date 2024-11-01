import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {BooksComponent} from './books/books.component';
import {BookService} from "./book.service";
import {QuotePipe} from "./quote.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookRegistrationComponent} from './book-registration/book-registration.component';
import {HighlightDirective} from "./highlight.directive";
import {BookDetailsComponent} from './book-details/book-details.component';
import {HttpClientModule} from "@angular/common/http";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {NewsComponent} from './news/news.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home/home.component';
import {StatusComponent} from './status/status.component';
import {AdminComponent} from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    BookRegistrationComponent,
    BookDetailsComponent,
    NewsComponent,
    HomeComponent,
    StatusComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    QuotePipe,
    FormsModule,
    ReactiveFormsModule,
    HighlightDirective,
    HttpClientModule,
    ScrollingModule,
    AppRoutingModule
  ],
  providers: [{
    provide: BookService,
    useClass: BookService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
