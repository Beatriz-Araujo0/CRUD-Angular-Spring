import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmatiomDialogComponent } from './confirmatiom-dialog.component';

describe('ConfirmatiomDialogComponent', () => {
  let component: ConfirmatiomDialogComponent;
  let fixture: ComponentFixture<ConfirmatiomDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmatiomDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmatiomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
