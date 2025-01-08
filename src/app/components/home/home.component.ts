import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bannerImage: string = '/assets/jumbo.jpg';
  bannerAlt: string = 'MICECON 2024 Banner';
  bannerMaxWidth: string = '60%';
  bannerHeight: string = 'auto';
  conferenceTitle: string = 'Welcome to MICECON 2024';
  conferenceDescription: string = 'Join us for the premier conference on Meetings, Incentives, Conferences, and Exhibitions.';
  aboutTitle: string = 'About MICECON 2024';
  aboutDescription: string = 'MICECON 2024 brings together industry leaders, professionals, and enthusiasts from around the world to discuss the latest trends, innovations, and opportunities in the MICE industry.';
  scheduleTitle: string = 'Conference Schedule';
  scheduleDescription: string = 'Stay tuned for the detailed schedule of events, sessions, and networking opportunities.';
  registerTitle: string = 'Register Now';
  registerDescription: string = 'Don\'t miss out on this incredible event.';
  registerLink: string = '/join';
  keynoteTitle: string = 'Keynote Speakers';
  keynoteDescription: string = 'We are excited to announce our lineup of keynote speakers who are leaders and innovators in the MICE industry.';
  keynoteSpeakers: { name: string, title: string }[] = [
    { name: 'Jane Doe', title: 'CEO of EventCorp' },
    { name: 'John Smith', title: 'Founder of ConferenceWorld' },
    { name: 'Emily Johnson', title: 'Head of Marketing at ExpoExperts' }
  ];
  venueTitle: string = 'Venue';
  venueDescription: string = 'MICECON 2024 will be held at the stunning Grand Conference Center, located in the heart of the city with easy access to hotels, restaurants, and attractions.';
  venueImage: string = '/assets/venue.jpg';
  venueAlt: string = 'Grand Conference Center';
  venueMaxWidth: string = '50%';
  sponsorsDescription: string = 'We would like to thank our generous sponsors for their support:';
  sponsors: { level: string, name: string }[] = [
    { level: 'Platinum Sponsor', name: 'Global Events Inc.' },
    { level: 'Gold Sponsor', name: 'Conference Solutions' },
    { level: 'Silver Sponsor', name: 'Event Planners Ltd.' }
  ];
  contactTitle: string = 'Contact Us';
  contactDescription: string = 'If you have any questions or need further information, please feel free to';
  contactLink: string = '/contact';
}
