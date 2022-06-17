import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaexamenesComponent } from './paginaexamenes.component';

describe('PaginaexamenesComponent', () => {
  let component: PaginaexamenesComponent;
  let fixture: ComponentFixture<PaginaexamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaexamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaexamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
