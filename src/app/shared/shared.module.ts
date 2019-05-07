import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: max-line-length
import {
MatCardModule,
MatButtonModule,
MatInputModule,
MatIconModule,
MatDividerModule,
MatToolbarModule,
MatExpansionModule,
MatListModule,
MatSidenavModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatSidenavModule

  ]
})
export class SharedModule { }
