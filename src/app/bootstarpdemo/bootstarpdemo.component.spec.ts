import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstarpdemoComponent } from './bootstarpdemo.component';

describe('BootstarpdemoComponent', () => {
  let component: BootstarpdemoComponent;
  let fixture: ComponentFixture<BootstarpdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstarpdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstarpdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
