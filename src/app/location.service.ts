import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Location } from './location.interface';

@Injectable({
    providedIn: 'root',
})

export class LocationService {
    private http = inject(HttpClient)
    public locations = signal<Location[]>([])
    readonly url = 'logements.json';

    getLocations(): Observable<Location[]> {
        return this.http.get<Location[]>(this.url).pipe(
          tap(locations => this.locations.set(locations))  
        );
    }
}