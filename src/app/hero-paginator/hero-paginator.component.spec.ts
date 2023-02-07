import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPaginatorComponent } from './hero-paginator.component';

describe('HeroPaginatorComponent', () => {
  let component: HeroPaginatorComponent;
  let fixture: ComponentFixture<HeroPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
