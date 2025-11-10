import { Component,Input, OnDestroy, OnInit, HostListener  } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'photos-carousel',
  standalone: true,
  imports: [MatIcon,MatCard,CommonModule],
  templateUrl: './photos-carousel.component.html',
  styleUrl: './photos-carousel.component.scss'
})
export class PhotosCarouselComponent {
@Input() autoplay:boolean = true;
@Input() intervalMs:number = 4000;
@Input() images: string[] = [];
@Input() height:string = '400px';


current = 0;
autoplaySub: Subscription | null = null;
isHovered = false;


ngOnInit() {
this.startAutoplayIfNeeded();
}


ngOnDestroy() {
this.stopAutoplay();
}


startAutoplayIfNeeded() {
this.stopAutoplay();
if (this.autoplay && (this.images?.length || 0) > 1) {
this.autoplaySub = interval(this.intervalMs).subscribe(() => {
if (!this.isHovered) this.next();
});
}
}


stopAutoplay() {
if (this.autoplaySub) {
this.autoplaySub.unsubscribe();
this.autoplaySub = null;
}
}


prev() {
this.current = (this.current - 1 + this.images.length) % this.images.length;
}


next() {
this.current = (this.current + 1) % this.images.length;
}


goTo(index: number) {
if (index >= 0 && index < this.images.length) this.current = index;
}


@HostListener('mouseenter') onEnter() {
this.isHovered = true;
}


@HostListener('mouseleave') onLeave() {
this.isHovered = false;
}


@HostListener('window:keydown', ['$event'])
onKeydown(event: KeyboardEvent) {
if (event.key === 'ArrowLeft') this.prev();
if (event.key === 'ArrowRight') this.next();
}
}



