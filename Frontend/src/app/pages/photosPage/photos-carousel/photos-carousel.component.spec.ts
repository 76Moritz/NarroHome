import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosCarouselComponent } from './photos-carousel.component';

describe('PhotosCarouselComponent', () => {
  let component: PhotosCarouselComponent;
  let fixture: ComponentFixture<PhotosCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
