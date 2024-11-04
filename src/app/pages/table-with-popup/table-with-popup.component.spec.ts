import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithPopupComponent } from './table-with-popup.component';

describe('TableWithPopupComponent', () => {
  let component: TableWithPopupComponent;
  let fixture: ComponentFixture<TableWithPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
