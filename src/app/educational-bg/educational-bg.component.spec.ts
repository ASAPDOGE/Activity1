import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalBGComponent } from './educational-bg.component';

describe('EducationalBGComponent', () => {
  let component: EducationalBGComponent;
  let fixture: ComponentFixture<EducationalBGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationalBGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
