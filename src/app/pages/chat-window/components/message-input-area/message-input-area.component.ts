import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewMessage } from 'src/app/http/message-http.service';

@Component({
  selector: 'app-message-input-area',
  templateUrl: './message-input-area.component.html',
  styleUrls: ['./message-input-area.component.scss']
})
export class MessageInputAreaComponent {

  public messageCreationForm = new FormGroup({
    text: new FormControl('', Validators.required),
  });

  public messageAdded: EventEmitter<NewMessage> = new EventEmitter();

  public onCreateMessageFormSubmission(): void {
    const message: NewMessage = {
      creator: 'Ivan',
      text: this.messageCreationForm.value.text
    }
    this.messageAdded.emit(message);
  }

  public get isFormValid(): boolean {
    return this.messageCreationForm.valid;
  }
}
