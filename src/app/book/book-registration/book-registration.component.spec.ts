import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookRegistrationComponent} from './book-registration.component';
import {BookService} from "../../core/book.service";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('BookRegistrationComponent', () => {
  let component: BookRegistrationComponent;
  let fixture: ComponentFixture<BookRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookRegistrationComponent],
      providers: [BookService],
      imports: [MatDialogModule, MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
