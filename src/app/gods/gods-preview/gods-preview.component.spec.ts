import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodsPreviewComponent } from './gods-preview.component';

describe('GodsPreviewComponent', () => {
  let component: GodsPreviewComponent;
  let fixture: ComponentFixture<GodsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
