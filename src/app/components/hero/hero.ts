import { Component, output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;
  playReel = output<void>();

  ngAfterViewInit() {
    if (this.heroVideo?.nativeElement) {
      const vid = this.heroVideo.nativeElement;
      vid.muted = true;
      vid.playsInline = true;
      vid.play().catch(() => {});
    }
  }

  onPlayReel() {
    this.playReel.emit();
  }
}
