import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComicComponent } from './display-comic.component';

describe('DisplayComicComponent', () => {
  let component: DisplayComicComponent;
  let fixture: ComponentFixture<DisplayComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayComicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
