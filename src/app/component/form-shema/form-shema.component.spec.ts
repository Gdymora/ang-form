import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShemaComponent } from './form-shema.component';

describe('FormShemaComponent', () => {
  let component: FormShemaComponent;
  let fixture: ComponentFixture<FormShemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormShemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
