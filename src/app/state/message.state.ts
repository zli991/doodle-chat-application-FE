import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Message } from "../http/message-http.service";

@Injectable({
    providedIn: 'root'
})
export class MessageState {

    private messages$: BehaviorSubject<Message[]> = new BehaviorSubject([]);
    private _hasOlderMessages: boolean = false;
    private _currentPageNumber: number = 0;

    public updateMessages(messages: Message[]): void {
        this.messages$.next(messages);
    }

    public incrementCurrentPageNumber(): void {
        this._currentPageNumber++;
    }

    public get messages(): Observable<Message[]> {
        return this.messages$.asObservable();
    }

    public get hasOlderMessages(): boolean {
        return this._hasOlderMessages;
    }

    public set hasOlderMessages(hasOlderMessages: boolean) {
        this._hasOlderMessages = hasOlderMessages;
    }

    public get currentPageNumber(): number {
        return this._currentPageNumber;
    }
}