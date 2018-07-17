import { Injectable } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
import 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { HeadersService } from './headers.service';
import { ApiClient } from './api-client.service';

@Injectable()
export class ContactService {
  selectedContact: any;
  constructor(
    private headerService: HeadersService,
    private apiClient: ApiClient
  ) { }

  addContact(contact): any {
    let url = environment.apiUrl + 'contact';
    let headers = this.headerService.createRawAuthorizationHeader();
    return this.apiClient.addContact(url, headers, contact)
      .map((response: any) => {
        let contact = response.json();
        return contact.data;
      })
  }

  getContactList(): any {
    let url = environment.apiUrl + 'contacts';
    let headers = this.headerService.createRawAuthorizationHeader();
    return this.apiClient.getContacts(url, headers)
      .map((response: any) => {
        let contactList = response.json();
        return contactList.data;
      })
  }

  updateContact(contact): any {
    let url = environment.apiUrl + 'contact';
    let headers = this.headerService.createRawAuthorizationHeader();
    return this.apiClient.updateContact(url, headers, contact)
      .map((response: any) => {
        let contact = response.json();
        return contact.data;
      })
  }

  deleteContact(contactId): any {
    let url = environment.apiUrl + 'contact/' + contactId;
    let headers = this.headerService.createRawAuthorizationHeader();
    return this.apiClient.deleteContact(url, headers)
      .map((response: any) => {
        let contact = response.json();
        return contact.data;
      })
  }
}
