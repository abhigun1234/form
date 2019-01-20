import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindinginteplatedrivenComponent } from './databindinginteplatedriven.component';

describe('DatabindinginteplatedrivenComponent', () => {
  let component: DatabindinginteplatedrivenComponent;
  let fixture: ComponentFixture<DatabindinginteplatedrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindinginteplatedrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindinginteplatedrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
