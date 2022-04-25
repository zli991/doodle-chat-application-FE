import { Component, Input } from '@angular/core';
import { Message } from 'src/app/http/message-http.service';

@Component({
  selector: 'app-message-entry',
  templateUrl: './message-entry.component.html',
  styleUrls: ['./message-entry.component.scss']
})
export class MessageEntryComponent {

  @Input()
  public message: Message = null;

  public get creator(): string | null {
    return this.message.creator;
  }

  public get text(): string | null {
    return this.message.text;
  }

  public get createdOn(): string | null {
    return this.message.createdOn;
  }
}
