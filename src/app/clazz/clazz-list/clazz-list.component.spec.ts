import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClazzListComponent } from './clazz-list.component';

describe('ClazzListComponent', () => {
  let component: ClazzListComponent;
  let fixture: ComponentFixture<ClazzListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClazzListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClazzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
