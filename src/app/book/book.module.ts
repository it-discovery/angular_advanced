import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from "./books/books.component";
import {BookComponent} from "./book.component";
import {BookRegistrationComponent} from "./book-registration/book-registration.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {QuotePipe} from "../shared/quote.pipe";
import {HighlightDirective} from "../shared/highlight.directive";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookRoutingModule} from "./book-routing.module";


@NgModule({
  declarations: [BooksComponent, BookComponent, BookRegistrationComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ScrollingModule,
    MatButtonModule,
    MatInputModule,
    QuotePipe,
    HighlightDirective,
    BookRoutingModule
  ]
})
export class BookModule {
}
