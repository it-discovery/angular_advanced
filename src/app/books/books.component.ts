import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {toSignal} from "@angular/core/rxjs-interop";
import {MatDialog} from "@angular/material/dialog";
import {BookRegistrationComponent} from "../book-registration/book-registration.component";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent {

  bookService = inject(BookService);

  matDialog = inject(MatDialog);

  books = toSignal(this.bookService.getBooks());

  saveBook(book: Book): void {
    this.bookService.save(book);
  }

  addBook() {
    const dialogRef = this.matDialog.open(BookRegistrationComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.saveBook(dialogRef.componentInstance.book!);
      }
    })
  }
}
