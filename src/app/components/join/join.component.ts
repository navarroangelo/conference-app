import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
  // event binding
  // two-way data binding ngModel
  // ngIf usage
formData: any = {};

onSubmit() {
  console.log('Form submitted:', this.formData);
}
}
