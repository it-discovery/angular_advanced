import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent {

  bookService = inject(BookService);

  books = toSignal(this.bookService.getBooks());

  saveBook(book: Book): void {
    this.bookService.save(book);
  }
}
