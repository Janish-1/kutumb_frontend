import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebmodalComponent } from './celebmodal.component';

describe('CelebmodalComponent', () => {
  let component: CelebmodalComponent;
  let fixture: ComponentFixture<CelebmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CelebmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CelebmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
