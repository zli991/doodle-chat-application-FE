import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, MessageHttpService, MessageResponse, NewMessage } from '../http/message-http.service';
import { MessageState } from '../state/message.state';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private messageHttpService: MessageHttpService, private messageState: MessageState) { }

  public findAll(pageNumber?: number): Observable<MessageResponse> {
    return this.messageHttpService.findAll(pageNumber);
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
