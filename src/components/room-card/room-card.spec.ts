import { TestBed, async } from '@angular/core/testing';
import { RoomCard } from './room-card';

describe('AppHeader', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RoomCard
      ],
    }).compileComponents();
  }));

  it('should create the home office map component', () => {
    const fixture = TestBed.createComponent(RoomCard);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
