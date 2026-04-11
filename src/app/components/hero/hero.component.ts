import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
	roles = [
		'Business Intelligence Assistant',
		'Data Engineer',
		'Full Stack Developer',
		'Python & SQL Developer'
	];

	currentRole = this.roles[0];
	private roleIndex = 0;
	private intervalId: any;

	ngOnInit(): void {
		this.intervalId = setInterval(() => {
			this.roleIndex = (this.roleIndex + 1) % this.roles.length;
			this.currentRole = this.roles[this.roleIndex];
		}, 3000);
	}

	ngOnDestroy(): void {
		if (this.intervalId) clearInterval(this.intervalId);
	}

	scrollToPortfolio() {
		document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	scrollToContact() {
		document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
}
