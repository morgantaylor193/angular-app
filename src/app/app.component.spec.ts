import { TestBed, async } from '@angular/core/testing';
import { AppBase } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppBase', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppBase
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppBase);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
