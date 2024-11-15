import { Component, OnInit } from '@angular/core';
import { projectDB } from 'src/data/projectDB';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = projectDB; 

  constructor() { }

  ngOnInit(): void { }
}
