import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material';

import { HomeComponent } from './home.component';
import { BubbleChatModule } from '../bubble-chat/bubble-chat.module';
import { NotAccessModule } from '../not-access/not-access.module';
import { SendMessageModule } from '../send-message/send-message.module';

@NgModule({
  imports: [CommonModule, MaterialModule, BubbleChatModule, NotAccessModule, SendMessageModule],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
