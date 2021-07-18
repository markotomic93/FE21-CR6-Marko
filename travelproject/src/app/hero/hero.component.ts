import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string;
  heroText: string;
  heroBtntext: string;
 
  constructor() { 
    this.heroHeading = "Travel Agency" ;
    this.heroText ="A travel agency is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination." ;
    this.heroBtntext = "Contact Us" ;
  }

  ngOnInit(): void {
  }

}
