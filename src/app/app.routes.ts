import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'location/:id', component: LocationComponent}
];
