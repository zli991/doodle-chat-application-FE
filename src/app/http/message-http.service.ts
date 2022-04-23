import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

export interface MessageResponse {
  content: Message[];
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface Message {
  text: string;
  creator: string;
  createdOn: string;
}

export interface NewMessage {
  text: string;
  creator: string;
}

export interface MessageSearchOptions {
  pageOptions: {
    pageNumber: number,
    numberOfResultsPerPage: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class MessageHttpService {

  readonly BASE_URL = 'http://localhost:8080/messages'

  constructor(private httpClient: HttpClient) { }

  public findAll(searchOptions?: MessageSearchOptions): Observable<MessageResponse> {
    const url = this.BASE_URL + '/search';
    return this.httpClient.post<MessageResponse>(url, searchOptions)
  }

  public save(message: NewMessage): Observable<Message> {
    return this.httpClient.post<Message>(this.BASE_URL, message)
  }
}
