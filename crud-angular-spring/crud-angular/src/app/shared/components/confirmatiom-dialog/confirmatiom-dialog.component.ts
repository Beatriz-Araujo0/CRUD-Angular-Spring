import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmatiom-dialog',
  templateUrl: './confirmatiom-dialog.component.html',
  styleUrls: ['./confirmatiom-dialog.component.scss']
})
export class ConfirmatiomDialogComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<ConfirmatiomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  ngOnInit(): void {
  }

  onConfirm(result:boolean): void {
    this.dialogRef.close(result);
  }
}
