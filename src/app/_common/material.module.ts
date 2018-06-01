import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class MaterialModule { }
