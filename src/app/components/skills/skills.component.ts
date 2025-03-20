import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {
    skills = [
        { name: 'Git', icon: 'assets/SkillsLogos/GIT.png' },
        { name: 'PostgreSQL', icon: 'assets/SkillsLogos/Postgresql.png' },
        { name: 'MongoDB', icon: 'assets/SkillsLogos/MongoDB.png' },
        { name: 'C', icon: 'assets/SkillsLogos/C.png' },
        { name: 'C++', icon: 'assets/SkillsLogos/C++.png' },
        { name: 'C#', icon: 'assets/SkillsLogos/Csharp.png' },
        { name: 'Python', icon: 'assets/SkillsLogos/Python.png' },
        { name: 'Java', icon: 'assets/SkillsLogos/Java.png' },
        { name: 'HTML', icon: 'assets/SkillsLogos/HTML.png' },
        { name: 'CSS', icon: 'assets/SkillsLogos/CSS.png' },
        { name: 'Angular', icon: 'assets/SkillsLogos/Angular.png' },
        { name: 'TypeScript', icon: 'assets/SkillsLogos/TypeScript.png' },
        { name: 'JavaScript', icon: 'assets/SkillsLogos/JavaScript.png' },
        { name: 'Tailwind CSS', icon: 'assets/SkillsLogos/Tailwind CSS.png' },
        { name: 'Microsoft 365', icon: 'assets/SkillsLogos/Microsoft-365.png' },
        { name: 'Docker', icon: 'assets/SkillsLogos/Docker.png' },
        { name: 'Power BI', icon: 'assets/SkillsLogos/Power BI.png' },
        { name: 'Linux', icon: 'assets/SkillsLogos/Linux.png' },
        { name: 'Git', icon: 'assets/SkillsLogos/GIT.png' }
    ];

    skillsDoubled: any[] = [];

    @ViewChild('marqueeContainer', { static: false }) marqueeContainer!: ElementRef;
    @ViewChild('marqueeContent', { static: false }) marqueeContent!: ElementRef;

    offset = 0;         // Deslocamento atual
    speed = 0.8;        // Velocidade de deslocamento (px por frame)
    paused = false;     // Flag para parar/continuar
    maxOffset = 0;      // Deslocamento máximo
    containerWidth = 0; // Largura visível do container
    contentWidth = 0;   // Largura total do conteúdo
    timeoutId: any;     // Referência de setTimeout (para limpar se precisar)

    constructor() { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        // Após renderizar, medimos a largura total do container e de um item
        this.measureWidths();
        this.startCarousel();
    }

    measureWidths(): void {
        const containerEl = this.marqueeContainer?.nativeElement as HTMLElement;
        const contentEl = this.marqueeContent?.nativeElement as HTMLElement;

        if (!containerEl || !contentEl) return;

        // Largura do container (visível)
        this.containerWidth = containerEl.offsetWidth;
        // Largura total do conteúdo
        // Dica: use scrollWidth (ou offsetWidth) para pegar o total real
        this.contentWidth = contentEl.scrollWidth;

        // Se o conteúdo for maior que o container,
        // offset máximo é a diferença
        if (this.contentWidth > this.containerWidth) {
            this.maxOffset = this.contentWidth - this.containerWidth;
        } else {
            // Se o conteúdo couber todo na tela, não precisa animar
            this.maxOffset = 0;
        }
    }


    startCarousel(): void {
        // Se estiver no meio de um setTimeout, cancele
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }

        this.paused = false;
        this.animate();
    }

    stopCarousel(): void {
        this.paused = true;
    }

    animate(): void {
        if (this.paused) return;
    
        // Se não tiver offset para percorrer, não faz nada
        if (this.maxOffset <= 0) return;
    
        this.offset += this.speed;
    
        if (this.offset < this.maxOffset) {
            // Ainda não chegou ao fim, continua animando
            requestAnimationFrame(() => this.animate());
        } else {
            // Chegou (ou passou) ao final
            this.offset = this.maxOffset;
            
            this.paused = true;
            this.timeoutId = setTimeout(() => {
                this.offset = 0;
                this.paused = false;
                this.animate();
            }, 1000);
        }
    }

    getTransform(): string {
        // Translação negativa de offset
        return `translateX(-${this.offset}px)`;
    }
}
