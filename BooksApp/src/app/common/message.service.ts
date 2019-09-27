import { Injectable } from '@angular/core';
import { MessageItem } from './share/message/message-type';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  currentMessage: MessageItem = null;

  constructor() {
    this.currentMessage = {
      messageType: "Message",
      messageDisplay: ""
    };
  }

  getCurrentMessage(): any {
    return this.currentMessage;
  }

  addMessage(newMessage: MessageItem): void {
    this.currentMessage = newMessage;
  }

  removeMessage(): void {
    this.currentMessage = null;
  }

}
