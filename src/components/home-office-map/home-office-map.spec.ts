import { TestBed, async } from '@angular/core/testing';
import { HomeOfficeMap } from './home-office-map';

describe('AppHeader', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeOfficeMap
      ],
    }).compileComponents();
  }));

  it('should create the home office map component', () => {
    const fixture = TestBed.createComponent(HomeOfficeMap);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
