import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';

import { ContactService } from '../../../shared/services';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {
  contact: any = {};
  contactView: any = {};
  isSelectedContact: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ContactModalComponent>,
    private contactService: ContactService,
  ) { }

  ngOnInit() {
    if (this.contactService.selectedContact) {
      this.isSelectedContact = true;
      this.contactView = _.clone(this.contactService.selectedContact, true);
      this.contact = this.contactService.selectedContact;
    }
  }

  contactDetail() {
    if (!this.isSelectedContact) {
      console.log("add===")
      this.contactService.addContact(this.contact)
        .subscribe((res) => {
          this.dialogRef.close(true);
        },
          (err) => {
            console.log("err=====", err);
          })
    } else {
      this.contactService.updateContact(this.contact)
        .subscribe((res) => {
          this.dialogRef.close(true);
        },
          (err) => {
            console.log("err=====", err);
          })
    }
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

}
