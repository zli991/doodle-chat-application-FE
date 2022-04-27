import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
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

@Injectable({
  providedIn: 'root'
})
export class MessageHttpService {

  readonly BASE_URL = 'http://localhost:8080/messages'
  readonly PAGE_NUMBER_PARAMETER_NAME = 'pageNumber';

  constructor(private httpClient: HttpClient) { }

  public findAll(pageNumber?: number): Observable<MessageResponse> {
    const options = this.getRequestOptions(pageNumber);
    return this.httpClient.get<MessageResponse>(this.BASE_URL, options)
  }

  public save(message: NewMessage): Observable<Message> {
    return this.httpClient.post<Message>(this.BASE_URL, message)
  }

  private getRequestOptions(pageNumber?: number): { params: HttpParams } {
    const params: HttpParams = new HttpParams();
    if (pageNumber) {
      return { params: params.append(this.PAGE_NUMBER_PARAMETER_NAME, pageNumber.toString()) }
    }
    return { params };
  }
}
