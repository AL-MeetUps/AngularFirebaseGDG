import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleChatComponent } from './bubble-chat.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BubbleChatComponent],
  exports: [BubbleChatComponent]
})
export class BubbleChatModule { }
