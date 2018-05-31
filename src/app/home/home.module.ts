import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
