import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDelDialogComponent } from './admin-del-dialog.component';

describe('AdminDelDialogComponent', () => {
  let component: AdminDelDialogComponent;
  let fixture: ComponentFixture<AdminDelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
