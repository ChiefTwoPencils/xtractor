import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XTractComponent } from './x-tract.component';

describe('XTractComponent', () => {
  let component: XTractComponent;
  let fixture: ComponentFixture<XTractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XTractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XTractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
