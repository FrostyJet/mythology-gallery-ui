import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodsListComponent } from './gods-list.component';

describe('GodsListComponent', () => {
  let component: GodsListComponent;
  let fixture: ComponentFixture<GodsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
