import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClazzDeleteComponent } from './clazz-delete.component';

describe('ClazzDeleteComponent', () => {
  let component: ClazzDeleteComponent;
  let fixture: ComponentFixture<ClazzDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClazzDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClazzDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
