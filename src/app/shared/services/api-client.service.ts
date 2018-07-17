import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ApiClient {

  constructor(private http: Http) {
  }

  addContact(url, headers, body): any {
    // return this.http.post(url, body, { headers: headers });
    return this.http.get("/assets/jsons/contact.json")
  }

  getContacts(url, headers): any {
    // return this.http.get(url, { headers: headers });
    return this.http.get("/assets/jsons/contacts.json")
  }

  updateContact(url, body, headers): any {
    // return this.http.put(url, body, { headers: headers });
    return this.http.get("/assets/jsons/contact.json")
  }

  deleteContact(url, headers): any {
    // return this.http.delete(url, { headers: headers });
    return this.http.get("/assets/jsons/contact.json")
  }
}
