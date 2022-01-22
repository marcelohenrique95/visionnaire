import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ListPhonesRoutingModule } from './list-phones-routing.module';
import { ListPhonesComponent } from './list-phones.component';


@NgModule({
  declarations: [
    ListPhonesComponent
  ],
  imports: [
    CommonModule,
    ListPhonesRoutingModule,
    SharedModule
  ],
  exports: [
    ListPhonesComponent
  ]
})
export class ListPhonesModule { }
