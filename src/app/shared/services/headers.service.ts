import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class HeadersService {

  constructor() { }
  
  createNonAuthorizationHeader(): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  };

  createRawAuthorizationHeader(): any {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + 'token');
    headers.append('Content-Type', 'application/json');
    return headers;
  };

  createRawAuthorizationHeaderFormData(): any {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + 'token');
    return headers;
  };
}
