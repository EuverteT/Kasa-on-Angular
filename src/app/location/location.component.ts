import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { LocationListComponent } from '../location-list/location-list.component';
import { LocationService } from '../location.service';


@Component({
  selector: 'app-location',
  standalone: true,
  imports: [RouterOutlet, LocationListComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent implements OnInit{

  private locationService = inject(LocationService);
  locations = this.locationService.locations;

  id = 0
  private route = inject(ActivatedRoute);

  ngOnInit() {
      this.id = +this.route.snapshot.paramMap.get('id')!;

      this.locationService.getLocations().subscribe();

    };
  
  

}
