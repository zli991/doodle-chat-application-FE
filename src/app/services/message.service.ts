import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, MessageHttpService, MessageResponse, MessageSearchOptions, NewMessage } from '../http/message-http.service';
import { MessageState } from '../state/message.state';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private messageHttpService: MessageHttpService, private messageState: MessageState) { }

  public findAll(searchOptions?: MessageSearchOptions): Observable<MessageResponse> {
    return this.messageHttpService.findAll(searchOptions);
  }

  public save(message: NewMessage): Observable<Message> {
    return this.messageHttpService.save(message);
  }
  
  public updateMessages(messages: Message[]): void {
    this.messageState.updateMessages(messages);
  }

  public get messages(): Observable<Message[]> {
    return this.messageState.messages;
  }
}
