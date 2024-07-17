import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationComponent } from './location/location.component';

export const routes: Routes = [
    { path: '', component: LocationListComponent },
    { path: 'about', component: AboutComponent},
    { path: 'location/:id', component: LocationComponent}
];
