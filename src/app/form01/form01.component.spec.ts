import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form01Component } from './form01.component';

describe('Form01Component', () => {
  let component: Form01Component;
  let fixture: ComponentFixture<Form01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Form01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
