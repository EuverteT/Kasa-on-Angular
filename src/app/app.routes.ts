import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LocationListComponent } from './location-list/location-list.component';

export const routes: Routes = [
    { path: '', component: LocationListComponent },
    { path: 'about', component: AboutComponent}
];
