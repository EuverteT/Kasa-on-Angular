import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { About } from './about.interface';

@Injectable({
    providedIn: 'root',
})

export class AboutService {
    private http = inject(HttpClient)
    public abouts = signal<About[]>([])
    readonly url = 'about.json';

    getAbouts(): Observable<About[]> {
        return this.http.get<About[]>(this.url).pipe(
            tap(abouts => this.abouts.set(abouts))
        );
    }
}