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
      vid.defaultMuted = true;
      vid.playsInline = true;

      const playVideo = () => {
        vid.play().catch(() => {});
      };

      // Attempt autoplay immediately
      playVideo();

      // Fallback for iOS Low Power Mode: unlocks playback on first user touch or scroll
      const unlockAutoplay = () => {
        playVideo();
        window.removeEventListener('touchstart', unlockAutoplay);
        window.removeEventListener('pointerdown', unlockAutoplay);
        window.removeEventListener('scroll', unlockAutoplay);
      };

      window.addEventListener('touchstart', unlockAutoplay, { passive: true, once: true });
      window.addEventListener('pointerdown', unlockAutoplay, { passive: true, once: true });
      window.addEventListener('scroll', unlockAutoplay, { passive: true, once: true });
    }
  }

  onPlayReel() {
    this.playReel.emit();
  }
}
