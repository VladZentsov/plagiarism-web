import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  user = {
    name: '',
    surname: '',
    universityYear: null,
    groupName: '',
    email: ''
  };

  onSubmit() {
    console.log('User submitted:', this.user);
  }
}
