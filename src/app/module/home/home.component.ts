import { Component, OnInit } from '@angular/core';
import { linksUteis } from 'src/app/shared/static/links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public links = linksUteis;

  constructor() { }

  ngOnInit(): void {
  }

}
