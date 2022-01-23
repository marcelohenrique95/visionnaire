import { Component, OnInit } from '@angular/core';
import { PhoneService } from 'src/app/service/phone.service';
import { Phone } from 'src/app/shared/model/phone';

@Component({
  selector: 'app-list-phones',
  templateUrl: './list-phones.component.html',
  styleUrls: ['./list-phones.component.scss']
})
export class ListPhonesComponent implements OnInit {

  public phones: Phone[] = [];

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.listPhones();
  }

   listPhones() {
    this.phoneService.getListPhones().subscribe((res) => {
      if(res) {
        this.phones = res;
      }
    })
  }

}
