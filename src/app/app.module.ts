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

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    BookRegistrationComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    QuotePipe,
    FormsModule,
    ReactiveFormsModule,
    HighlightDirective,
    HttpClientModule
  ],
  providers: [{
    provide: BookService,
    useClass: BookService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
