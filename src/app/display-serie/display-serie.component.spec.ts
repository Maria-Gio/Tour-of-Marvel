import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySerieComponent } from './display-serie.component';

describe('DisplaySerieComponent', () => {
  let component: DisplaySerieComponent;
  let fixture: ComponentFixture<DisplaySerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
