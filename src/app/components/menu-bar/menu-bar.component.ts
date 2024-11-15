import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu-bar',
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
	scrollToAbout() {
		const aboutSection = document.querySelector('#About');
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
	
	scrollToSkills() {
		const skillsSection = document.querySelector('#skills');
		if (skillsSection) {
			skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
	
	scrollToExperience() {
		const experienceSection = document.querySelector('#experience');
		if (experienceSection) {
			experienceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
	
	scrollToContact() {
		const contactSection = document.querySelector('#contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	constructor() { }

	ngOnInit(): void {
	}

}
