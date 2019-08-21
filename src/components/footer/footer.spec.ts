import { TestBed, async } from '@angular/core/testing';
import { AppFooter } from './footer';

describe('AppFooter', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppFooter
      ],
    }).compileComponents();
  }));

  it('should create the home page', () => {
    const fixture = TestBed.createComponent(AppFooter);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
