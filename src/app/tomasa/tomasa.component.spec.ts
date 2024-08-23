import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomasaComponent } from './tomasa.component';

describe('TomasaComponent', () => {
  let component: TomasaComponent;
  let fixture: ComponentFixture<TomasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TomasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TomasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
