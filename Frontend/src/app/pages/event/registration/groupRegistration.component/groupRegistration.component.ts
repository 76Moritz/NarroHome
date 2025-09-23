import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { sendSimpleMessage } from '../../../../mailing/mailing';
import { Email_Subjects } from '../../../../mailing/subject.constants';
import { Textbuilder } from '../../../../mailing/text.constants';

@Component({
  selector: 'app-group-registration',
  templateUrl: './groupRegistration.component.html',
  styleUrls: ['./groupRegistration.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    CommonModule  
  ],
})
export class GroupRegistrationComponent {
  form = this.fb.group({
    groupName: ['', Validators.required],
    contactPerson: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\+?[0-9 ]{6,20}$/),
      ],
    ],
    personAmount: [null, [Validators.required, Validators.min(1)]],
    programmType: ['none'], // optional
    travel: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      const data=this.form.value;
      const response=sendSimpleMessage(Email_Subjects.incomingGroupRegistration,Textbuilder.buildText(data.groupName!,data.contactPerson!,data.email!,data.phone!,data.personAmount!,data.programmType!,data.travel!));
      console.log(response);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
