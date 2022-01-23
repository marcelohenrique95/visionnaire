import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() list_items: any[] = [];

  page = 1;
  pageSize = 7;
  collectionSize: number;

  constructor() {
    this.collectionSize = 0;
   }

  ngOnInit(): void {
  }

}
