import { Component, OnInit } from '@angular/core';
import { menuItems } from 'src/app/shared/static/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menu_items = menuItems;

  constructor() { }

  ngOnInit(): void {
  }

}
