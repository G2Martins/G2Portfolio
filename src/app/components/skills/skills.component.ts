import { Component, OnInit } from '@angular/core';

interface Skill {
    name: string;
    icon: string;
}

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
    dataSkills: Skill[] = [
        { name: 'Python',            icon: 'assets/SkillsLogos/Python.png' },
        { name: 'Power BI',          icon: 'assets/SkillsLogos/Power BI.png' },
        { name: 'Microsoft Fabric',  icon: 'assets/SkillsLogos/Fabric.png' },
        { name: 'Azure',             icon: 'assets/SkillsLogos/Azure.png' },
        { name: 'Azure Synapse',     icon: 'assets/SkillsLogos/AzureSynapse.png' },
        { name: 'SQL Server',        icon: 'assets/SkillsLogos/SQLServer.png' },
        { name: 'PostgreSQL',        icon: 'assets/SkillsLogos/Postgresql.png' },
        { name: 'MongoDB',           icon: 'assets/SkillsLogos/MongoDB.png' },
        { name: 'Microsoft 365',     icon: 'assets/SkillsLogos/Microsoft-365.png' },
    ];

    fullStackSkills: Skill[] = [
        { name: 'Angular',       icon: 'assets/SkillsLogos/Angular.png' },
        { name: 'TypeScript',    icon: 'assets/SkillsLogos/TypeScript.png' },
        { name: 'JavaScript',    icon: 'assets/SkillsLogos/JavaScript.png' },
        { name: 'Java',          icon: 'assets/SkillsLogos/Java.png' },
        { name: 'Spring Boot',   icon: 'assets/SkillsLogos/SpringBoot.png' },
        { name: 'HTML',          icon: 'assets/SkillsLogos/HTML.png' },
        { name: 'CSS',           icon: 'assets/SkillsLogos/CSS.png' },
        { name: 'Tailwind CSS',  icon: 'assets/SkillsLogos/Tailwind CSS.png' },
        { name: 'Git',           icon: 'assets/SkillsLogos/GIT.png' },
        { name: 'Linux',         icon: 'assets/SkillsLogos/Linux.png' },
        { name: 'C++',           icon: 'assets/SkillsLogos/C++.png' },
    ];

    dataSkillsDoubled: Skill[] = [];
    fullStackSkillsDoubled: Skill[] = [];

    ngOnInit(): void {
        this.dataSkillsDoubled     = [...this.dataSkills,     ...this.dataSkills];
        this.fullStackSkillsDoubled = [...this.fullStackSkills, ...this.fullStackSkills];
    }
}
