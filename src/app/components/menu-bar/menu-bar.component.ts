import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu-bar',
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
	isMenuOpen = false;

	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}

	closeMenu() {
		this.isMenuOpen = false;
	}

	private scrollTo(selector: string) {
		const el = document.querySelector(selector);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	scrollToAbout()      { this.scrollTo('#About'); }
	scrollToSkills()     { this.scrollTo('#skills'); }
	scrollToExperience() { this.scrollTo('#experience'); }
	scrollToPortfolio()  { this.scrollTo('#portfolio'); }
	scrollToContact()    { this.scrollTo('#contact'); }

	constructor() { }
	ngOnInit(): void { }
}
