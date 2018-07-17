import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDialogModule } from '@angular/material'

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

import { ContactService } from '../shared';
import { HeaderComponent, ConfirmationModalComponent } from '../shared';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ContactRoutingModule,
		MatCardModule,
		MatDialogModule
	],
	declarations: [
		HeaderComponent,
		ContactComponent,
		ConfirmationModalComponent,
		ContactModalComponent
	],
	providers: [
		ContactService
	],
	entryComponents: [
		ConfirmationModalComponent,
		ContactModalComponent
  ]
})
export class ContactModule {
}
