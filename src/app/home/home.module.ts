import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material';

import { HomeComponent } from './home.component';
import { BubbleChatModule } from '../bubble-chat/bubble-chat.module';

@NgModule({
  imports: [CommonModule, MaterialModule, BubbleChatModule],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
