import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelDialogComponent } from './del-dialog.component';

describe('DelDialogComponent', () => {
  let component: DelDialogComponent;
  let fixture: ComponentFixture<DelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
