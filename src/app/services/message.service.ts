import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, MessageHttpService, MessageResponse, MessageSearchOptions, NewMessage } from '../http/message-http.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private messageHttpService: MessageHttpService) { }

  public findAll(searchOptions?: MessageSearchOptions): Observable<MessageResponse> {
    return this.messageHttpService.findAll(searchOptions);
  }

  public save(message: NewMessage): Observable<Message> {
    return this.messageHttpService.save(message);
  } 
}
