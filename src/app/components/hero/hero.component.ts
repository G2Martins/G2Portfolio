import { Component } from '@angular/core';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css']
})
export class HeroComponent {
	scrollToPortfolio() {
		const portfolioSection = document.querySelector('#portfolio');
		if (portfolioSection) {
			portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
	
	scrollToContact() {
		const contactSection = document.querySelector('#contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
}
