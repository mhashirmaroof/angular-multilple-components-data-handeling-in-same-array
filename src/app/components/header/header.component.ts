import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  buttonToggle = true;

  constructor() { }

  ngOnInit(): void {
  }

  circleMenuToggle( ) {
    this.buttonToggle = !this.buttonToggle;
  }

}
