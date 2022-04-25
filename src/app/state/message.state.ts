import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Message } from "../http/message-http.service";

@Injectable({
    providedIn: 'root'
})
export class MessageState {

    private messages$: BehaviorSubject<Message[]> = new BehaviorSubject([]);

    public updateMessages(messages: Message[]): void {
        this.messages$.next(messages);
    }

    public get messages(): Observable<Message[]> {
        return this.messages$.asObservable();
    }
}