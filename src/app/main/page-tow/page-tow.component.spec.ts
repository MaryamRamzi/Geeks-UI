import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTowComponent } from './page-tow.component';

describe('PageTowComponent', () => {
  let component: PageTowComponent;
  let fixture: ComponentFixture<PageTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
