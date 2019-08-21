import { TestBed, async } from '@angular/core/testing';
import { AppHeader } from './header';

describe('AppHeader', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppHeader
      ],
    }).compileComponents();
  }));

  it('should create the home page', () => {
    const fixture = TestBed.createComponent(AppHeader);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
