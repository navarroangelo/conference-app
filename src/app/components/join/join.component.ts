import { Component } from '@angular/core';

// IMPORT COMMON MODULE
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
  participants = 10478;
  eventName = 'MICECON 2025';
  eventDate = '2025-05-25';
  eventTime = '10:00 AM';
  comment = '';

  incrementParticipants() {
    this.participants++;
  }

  decrementParticipants() {
    alert('We hope to see you next time!');
  }
}