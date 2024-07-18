import { Component, Input, OnInit, inject } from '@angular/core';
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
export class LocationComponent implements OnInit {

  private locationService = inject(LocationService);
  locations = this.locationService.locations;
  private route = inject(ActivatedRoute);
  
  id = 0
  pictureIndex = 0

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.locationService.getLocations().subscribe();

    this.pictureIndex = 0;

  };

  prev() {
    let arrayLength = this.locations()[this.id].pictures.length
    if (this.pictureIndex == 0) {
      this.pictureIndex = arrayLength;
    }
    if ((this.pictureIndex > 0) && (this.pictureIndex != 0)) {
      this.pictureIndex = this.pictureIndex - 1;
    }
  }

  next() {
    let arrayLength = this.locations()[this.id].pictures.length
    if (this.pictureIndex < (arrayLength)) {
      this.pictureIndex = this.pictureIndex + 1;
    }
    if (this.pictureIndex == (arrayLength)) {
      this.pictureIndex = 0;
    }
  }

}
