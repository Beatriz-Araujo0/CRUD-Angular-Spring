import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { ConfirmatiomDialogComponent } from './components/confirmatiom-dialog/confirmatiom-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    ConfirmatiomDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
  exports : [
    ErrorDialogComponent,
    ConfirmatiomDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
