import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentporjComponent } from './currentporj.component';

describe('CurrentporjComponent', () => {
  let component: CurrentporjComponent;
  let fixture: ComponentFixture<CurrentporjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentporjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentporjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
