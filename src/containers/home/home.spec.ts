import { TestBed, async } from '@angular/core/testing';
import { HomePage } from './home';

describe('HomePage', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePage
      ],
    }).compileComponents();
  }));

  it('should create the home page', () => {
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
