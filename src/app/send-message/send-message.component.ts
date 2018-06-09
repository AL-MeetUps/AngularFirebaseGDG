import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {

  newMessage: string;
  @Output() newMessageEvt = new EventEmitter<string>();

  sendMessage(text: string) {
    if (text) {
      this.newMessageEvt.emit(text);
      this.reset();
    }
  }

  private reset() {
    this.newMessage = '';
  }

}
