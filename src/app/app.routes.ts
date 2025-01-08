import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { JoinComponent } from './components/join/join.component';
import { PartnersComponent } from './components/partners/partners.component';

export const routes: Routes = [
    // HOME
    {path: '', component: HomeComponent},
    // ABOUT
    {path: 'about', component: AboutComponent},
    // JOIN
    {path: 'join', component: JoinComponent},
    // PARTNERS
    {path: 'partners', component: PartnersComponent}
];
