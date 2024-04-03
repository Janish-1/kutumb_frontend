import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyloginotpComponent } from './verifyloginotp.component';

describe('VerifyloginotpComponent', () => {
  let component: VerifyloginotpComponent;
  let fixture: ComponentFixture<VerifyloginotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyloginotpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyloginotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
