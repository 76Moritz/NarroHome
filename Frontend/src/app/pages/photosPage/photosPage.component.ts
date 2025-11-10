import { Component } from '@angular/core';
import { PhotosCarouselComponent } from "./photos-carousel/photos-carousel.component";
@Component({
  selector: 'app-privacyPolicy',
  templateUrl: './photosPage.component.html',
  styleUrl: './photosPage.component.scss',
  standalone: true,
  imports: [PhotosCarouselComponent]
})
export class PhotosPageComponent {

}
