import { Component, Input } from '@angular/core';
import { Message } from 'src/app/http/message-http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  @Input()
  public messages: Message[] = [];
  
}
