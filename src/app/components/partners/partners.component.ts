import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  partners: { name: string }[] = [];
  constructor() {
    this.partners = [
      { name: 'Global Construction' },
      { name: 'Tech Innovators' },
      { name: 'Health Solutions' },
      { name: 'Eco Energy' },
      { name: 'Finance Experts' },
      { name: 'Travel Ventures' },
      { name: 'Foodies Delight' },
      { name: 'EduTech' },
      { name: 'Fashion Forward' },
      { name: 'Media Masters' }
    ];
  }
  newPartnerName: string = '';

  addPartner() {
    if (this.newPartnerName.trim()) {
      this.partners.push({ name: this.newPartnerName });
      this.newPartnerName = '';
    }
  }
}
