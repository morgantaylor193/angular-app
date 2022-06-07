import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Home } from './home';

describe('Home', () => {
  const pageTitle = 'Home Page';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Home],
    }).compileComponents();
  });

  it('should create the child container', () => {
    const fixture = TestBed.createComponent(Home);
    const page = fixture.debugElement.componentInstance;
    expect(page).toBeTruthy();
    expect(page.pageTitle).toEqual(pageTitle);
  });

  it('should render page title', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page-title')?.textContent).toContain(
      `${pageTitle} is rendered`
    );
  });
});
