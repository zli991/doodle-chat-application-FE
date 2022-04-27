import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from 'src/app/http/message-http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  @Input()
  public messages: Message[] = [];

  @Input()
  public hasOlderMessages: boolean = false;

  @Output()
  public showOlderMessagesClicked: EventEmitter<void> = new EventEmitter();

  public onShowOlderMessagesClicked(): void {
    this.showOlderMessagesClicked.emit();
  }

  public isMyMessage(message: Message): boolean {
    return message.creator === 'Ivan';
  }
  
}
