import { TestBed, async } from '@angular/core/testing';
import { LoginPage } from './login';

describe('LoginPage', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginPage
      ],
    }).compileComponents();
  }));

  it('should create the home page', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
