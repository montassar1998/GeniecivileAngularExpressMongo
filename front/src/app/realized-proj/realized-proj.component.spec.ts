import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizedProjComponent } from './realized-proj.component';

describe('RealizedProjComponent', () => {
  let component: RealizedProjComponent;
  let fixture: ComponentFixture<RealizedProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizedProjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizedProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
