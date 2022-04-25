import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StatefullService } from '../framework/statefull.service';
import { Message, MessageResponse } from '../http/message-http.service';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class ChatWindowFacadeService extends StatefullService {

  constructor(private messageService: MessageService) {
    super();
   }

  public initializeChatWindowPage(): void {
    const initSubsription: Subscription = this.messageService.findAll().subscribe((messageResponse: MessageResponse) => {
      this.messageService.updateMessages(messageResponse.content);
    });
    this.subscription.add(initSubsription);
  }

  public get messages(): Observable<Message[]> {
    return this.messageService.messages;
  }
}
