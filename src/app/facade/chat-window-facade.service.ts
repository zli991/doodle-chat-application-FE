import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StatefullService } from '../framework/statefull.service';
import { Message, MessageResponse, MessageSearchOptions, NewMessage } from '../http/message-http.service';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class ChatWindowFacadeService extends StatefullService {

  private _messages: Message[] = [];
  private _hasOlderMessages: boolean = false;
  private _currentPageNumber: number = 0;

  constructor(private messageService: MessageService) {
    super();
   }

  public initializeChatWindowPage(): void {
    const initSubsription: Subscription = this.messageService.findAll().subscribe((messageResponse: MessageResponse) => {
      this.messageService.updateMessages(messageResponse.content);
      this._messages = messageResponse.content;
      this._hasOlderMessages = !messageResponse.last;
    });
    this.subscription.add(initSubsription);
  }

  public getMoreMessages(): void {
    const moreMessagesSubscription: Subscription = this.messageService.findAll(this.moreMessagesSearchOptions).subscribe((messageResponse: MessageResponse) => {
      this.messageService.updateMessages([...messageResponse.content, ...this._messages]);
      this._messages = [...messageResponse.content, ...this._messages];
      this._hasOlderMessages = !messageResponse.last;
    });
    this.subscription.add(moreMessagesSubscription);
  }

  public addNewMessage(message: NewMessage): void {
    this.messageService.save(message).subscribe((newMessage: Message) => {
      this.messageService.updateMessages([...this._messages, newMessage])
    });
  }

  public get messages(): Observable<Message[]> {
    return this.messageService.messages;
  }

  public get hasOlderMessages(): boolean {
    return this._hasOlderMessages;
  }

  private get moreMessagesSearchOptions(): MessageSearchOptions {
    return {
      pageOptions: {
        pageNumber: ++this._currentPageNumber
      }
    }
  }
}
