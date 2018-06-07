import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Message } from '../_common/message';
import { User } from '../_common/user';

@Component({
  selector: 'app-bubble-chat',
  templateUrl: './bubble-chat.component.html',
  styleUrls: ['./bubble-chat.component.scss']
})
export class BubbleChatComponent implements OnChanges {

  @Input() currentUser: User;
  @Input() message: Message;
  @Input() isMine: boolean;

  defaultAvatar = 'https://ih1.redbubble.net/image.423215377.9237/flat,1200x1200,075,f.u2.jpg';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.message && changes.message.currentValue) {
      if (!this.message.imageURL) {
        this.message.imageURL = this.defaultAvatar;
      }
    }
  }
}
