import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatWindowFacadeService } from 'src/app/facade/chat-window-facade.service';
import { Message, NewMessage } from 'src/app/http/message-http.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  constructor(private chatWindowFacade: ChatWindowFacadeService) { }

  public ngOnInit(): void {
    this.chatWindowFacade.initializeChatWindowPage();
  }

  public onMessageAdded(message: NewMessage): void {
    this.chatWindowFacade.addNewMessage(message);
  }

  public get messages(): Observable<Message[]> {
    return this.chatWindowFacade.messages;
  }

}
