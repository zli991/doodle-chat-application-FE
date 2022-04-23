import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessageInputAreaComponent } from './chat-window/message-input-area/message-input-area.component';
import { DisplayComponent } from './chat-window/display/display.component';
import { MessageEntryComponent } from './chat-window/display/message-entry/message-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    MessageInputAreaComponent,
    DisplayComponent,
    MessageEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
