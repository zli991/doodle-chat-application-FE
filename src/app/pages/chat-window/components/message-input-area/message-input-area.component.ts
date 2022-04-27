import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewMessage } from 'src/app/http/message-http.service';

@Component({
  selector: 'app-message-input-area',
  templateUrl: './message-input-area.component.html',
  styleUrls: ['./message-input-area.component.scss']
})
export class MessageInputAreaComponent {

  @Output()
  public messageAdded: EventEmitter<NewMessage> = new EventEmitter();

  public messageCreationForm = new FormGroup({
    text: new FormControl('', Validators.required),
  });

  // In real app, creator name would probably come from JWT token (in case user registration is required)
  public onCreateMessageFormSubmission(): void {
    const text: string = this.messageCreationForm.value.text.trim();
    if (text.length > 0) {
      const message: NewMessage = {
        creator: 'Ivan',
        text: this.messageCreationForm.value.text
      }
      this.messageAdded.emit(message);
      this.messageCreationForm.reset();
    }
  }

  public get submitDissabled(): boolean {
    return !this.messageCreationForm.valid;
  }
}
