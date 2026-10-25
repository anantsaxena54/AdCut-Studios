import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class TestimonialsComponent {
  expertiseList = [
    'Brand Commercials',
    'Film Editing & Pacing',
    'DaVinci Color Grading',
    'Sound Design & Mixing',
    'Creative Supervision'
  ];

  brandLogos = [
    { name: 'Netflix', src: 'assets/brands/netflix.png' },
    { name: 'Prime Video', src: 'assets/brands/prime-video.png' },
    { name: 'Samsung', src: 'assets/brands/samsung.png' },
    { name: 'Sony LIV', src: 'assets/brands/sonyliv.png' },
    { name: 'Yash Raj Films', src: 'assets/brands/yash-raj-films.png' },
    { name: 'Puma', src: 'assets/brands/puma.png' },
    { name: 'Adidas', src: 'assets/brands/adidas.png' },
    { name: 'Warner Music Group', src: 'assets/brands/warner-music.png' },
    { name: 'Mahindra', src: 'assets/brands/mahindra.png' },
    { name: 'Titan', src: 'assets/brands/titan.png' },
    { name: "McDonald's", src: 'assets/brands/mcdonalds.png' },
    { name: 'Yamaha', src: 'assets/brands/yamaha.png' },
    { name: 'Zomato', src: 'assets/brands/zomato.png' },
    { name: 'Blinkit', src: 'assets/brands/blinkit.png' },
    { name: 'Flipkart', src: 'assets/brands/flipkart.png' },
    { name: 'Cars24', src: 'assets/brands/cars24.png' },
    { name: 'BGMI', src: 'assets/brands/bgmi.png' },
    { name: 'Tips Industries', src: 'assets/brands/tips-industries.svg' },
    { name: 'Aamir Khan Productions', src: 'assets/brands/aamir-khan-productions.png' },
    { name: 'G-Shock', src: 'assets/brands/g-shock.png' },
    { name: 'Scapia', src: 'assets/brands/scapia.png' },
    { name: 'Lenskart', src: 'assets/brands/lenskart.png' },
    { name: 'Cinépolis', src: 'assets/brands/cinepolis.png' },
    { name: 'Minimalist', src: 'assets/brands/minimalist.png' },
    { name: 'Hyphen', src: 'assets/brands/hyphen.png' },
    { name: 'BBLUNT', src: 'assets/brands/bblunt.png' },
    { name: 'Zouk', src: 'assets/brands/zouk.png' },
    { name: 'Gillette', src: 'assets/brands/gillette.png' },
    { name: 'Realme', src: 'assets/brands/realme.png' },
    { name: 'Voltas', src: 'assets/brands/voltas.png' },
    { name: 'Hockey India League', src: 'assets/brands/hockey-india-league.png' },
    { name: 'Mumbai Indians', src: 'assets/brands/mumbai-indians.png' },
    { name: 'Impact Mints', src: 'assets/brands/impact-mints.png' },
    { name: 'Complan', src: 'assets/brands/complan.png' },
    { name: 'Nestlé', src: 'assets/brands/nestle.png' },
    { name: 'Pokémon', src: 'assets/brands/pokemon.png' },
    { name: 'Gully Gang', src: 'assets/brands/gully-gang.png' },
    { name: 'Campa Cola', src: 'assets/brands/campa-cola.png' },
    { name: 'District', src: 'assets/brands/district.png' }
  ];
}
