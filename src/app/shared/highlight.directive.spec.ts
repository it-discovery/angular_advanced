import {HighlightDirective} from './highlight.directive';
import {TestBed} from "@angular/core/testing";

describe('HighlightDirective', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HighlightDirective],
    }).compileComponents();
  });
  it('should create an instance', () => {
    const directive = TestBed.inject(HighlightDirective);
    expect(directive).toBeTruthy();
  });
});
