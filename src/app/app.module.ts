import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatWindowComponent } from './pages/chat-window/chat-window.component';
import { MessageInputAreaComponent } from './pages/chat-window/components/message-input-area/message-input-area.component';
import { DisplayComponent } from './pages/chat-window/components/display/display.component';
import { MessageEntryComponent } from './pages/chat-window/components/display/message-entry/message-entry.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    MessageInputAreaComponent,
    DisplayComponent,
    MessageEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
