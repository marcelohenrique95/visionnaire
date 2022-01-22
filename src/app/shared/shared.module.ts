import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    ListItemComponent,
    PageErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ListItemComponent,
    PageErrorComponent
  ]
})
export class SharedModule { }
