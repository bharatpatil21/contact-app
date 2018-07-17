import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ContactService } from '../shared/services';
import { ConfirmationModalComponent } from '../shared/components/confirmation-modal/confirmation-modal.component';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactList: any;
  constructor(
    private contactService: ContactService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    //GET contact list
    this.getContactList();
  }

  getContactList() {
    this.contactService.getContactList()
      .subscribe((res) => {
        this.contactList = res.contacts;
      },
        (err) => {
          console.log("err=====", err);
        })
  }

  deleteContact(contact) {
    let content = 'Are you sure to delete contact?';
    let title = 'Delete ' + contact.first_name + ' ' + contact.last_name;
    let contentType = 'warning';
    let dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '350px',
      data: { title, content, contentType },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactService.deleteContact(contact.id)
          .subscribe((res) => {
            console.log("contact deleted success");
          },
            (err) => {
              console.log("err=====", err);
            })
      }
    });
  }

  addContact() {
    this.contactService.selectedContact = '';
    let dialogRef = this.dialog.open(ContactModalComponent, {
      width: '450px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("contact added success");
      }
    });
  }

  editContact(contact) {
    this.contactService.selectedContact = {
      firstName: contact.first_name,
      lastName: contact.last_name,
      email: contact.email,
      phoneNo: contact.phone_no
    };
    let dialogRef = this.dialog.open(ContactModalComponent, {
      width: '450px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("contact added success");
      }
    });
  }
}
