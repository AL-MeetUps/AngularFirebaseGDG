import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SendMessageComponent } from './send-message.component';
import { MaterialModule } from '@material';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [SendMessageComponent],
  exports: [SendMessageComponent]
})
export class SendMessageModule { }
