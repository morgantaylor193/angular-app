import { TestBed, async } from '@angular/core/testing';
import { DetailsPage } from './details';

describe('DetailsPage', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailsPage
      ],
    }).compileComponents();
  }));

  it('should create the home page', () => {
    const fixture = TestBed.createComponent(DetailsPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
