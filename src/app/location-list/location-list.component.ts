import { Component, OnInit, inject } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-list',
  standalone: true,
  imports: [],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss'
})
export class LocationListComponent implements OnInit {
  private locationService = inject(LocationService);
  locations = this.locationService.locations;

  ngOnInit() {
    this.locationService.getLocations().subscribe();
  }

}
