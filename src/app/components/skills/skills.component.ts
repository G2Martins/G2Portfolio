import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
    skills = [
        { name: 'Git', icon: 'assets/SkillsLogos/GIT.png' },
        { name: 'PostgreSQL', icon: 'assets/SkillsLogos/Postgresql.png' },
        { name: 'C', icon: 'assets/SkillsLogos/C.png' },
        { name: 'C++', icon: 'assets/SkillsLogos/C++.png' },
        { name: 'Python', icon: 'assets/SkillsLogos/Python.png' },
        { name: 'Java', icon: 'assets/SkillsLogos/Java.png' },
        { name: 'HTML', icon: 'assets/SkillsLogos/HTML.png' },
        { name: 'CSS', icon: 'assets/SkillsLogos/CSS.png' },
        { name: 'Angular', icon: 'assets/SkillsLogos/Angular.png' },
        { name: 'TypeScript', icon: 'assets/SkillsLogos/TypeScript.png' },
        { name: 'JavaScript', icon: 'assets/SkillsLogos/JavaScript.png' },
        { name: 'Tailwind CSS', icon: 'assets/SkillsLogos/Tailwind CSS.png' },
        { name: 'Docker', icon: 'assets/SkillsLogos/Docker.png' },
        { name: 'Power BI', icon: 'assets/SkillsLogos/Power BI.png' },
        { name: 'Linux', icon: 'assets/SkillsLogos/Linux.png' }
    ];


    offset = 0;
    speed = 1;
    paused = false;

    constructor() { }

    ngOnInit(): void {
        this.startCarousel();
    }

    startCarousel(): void {
        this.paused = false;
        this.animate();
    }

    stopCarousel(): void {
        this.paused = true;
    }

    animate(): void {
        if (!this.paused) {
            this.offset += this.speed;
            if (this.offset >= 100 * this.skills.length) {
                this.offset = 0; // Reseta o offset para loop infinito
            }
            requestAnimationFrame(() => this.animate());
        }
    }

    getTransform(): string {
        return `translateX(-${this.offset}px)`;
    }
}
