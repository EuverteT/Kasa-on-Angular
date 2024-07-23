import { Component, OnInit, inject } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  private aboutService = inject(AboutService);
  abouts = this.aboutService.abouts;

  ngOnInit() {
    this.aboutService.getAbouts().subscribe();
  }
}
