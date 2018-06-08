import { NgModule } from '@angular/core';
import { NotAccessComponent } from './not-access.component';
import { MaterialModule } from '@material';

@NgModule({
  imports: [MaterialModule],
  declarations: [NotAccessComponent],
  exports: [NotAccessComponent]

})
export class NotAccessModule { }
