import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Child } from './child';

describe('Child', () => {
  const pageTitle = 'Child Page';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Child],
    }).compileComponents();
  });

  it('should create the child container', () => {
    const fixture = TestBed.createComponent(Child);
    const page = fixture.debugElement.componentInstance;
    expect(page).toBeTruthy();
    expect(page.pageTitle).toEqual(pageTitle);
  });

  it('should render page title', () => {
    const fixture = TestBed.createComponent(Child);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page-title')?.textContent).toContain(
      `${pageTitle} is rendered`
    );
  });
});
