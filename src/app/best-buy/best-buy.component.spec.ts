import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BestBuyComponent} from './best-buy.component';

describe('BestBuyComponent', () => {
  let component: BestBuyComponent;
  let fixture: ComponentFixture<BestBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestBuyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BestBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
