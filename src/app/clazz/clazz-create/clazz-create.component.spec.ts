import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClazzCreateComponent } from './clazz-create.component';

describe('ClazzCreateComponent', () => {
  let component: ClazzCreateComponent;
  let fixture: ComponentFixture<ClazzCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClazzCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClazzCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
