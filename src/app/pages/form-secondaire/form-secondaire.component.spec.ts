import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSecondaireComponent } from './form-secondaire.component';

describe('FormSecondaireComponent', () => {
  let component: FormSecondaireComponent;
  let fixture: ComponentFixture<FormSecondaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSecondaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSecondaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
