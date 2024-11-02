import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StatusComponent} from './status.component';
import {NotificationService} from "../core/notification.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusComponent],
      imports: [MatSnackBarModule],
      providers: [NotificationService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
