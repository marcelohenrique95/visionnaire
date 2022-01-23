import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhonePipe } from './pipes/phone.pipe';
import { RealPipe } from './pipes/real.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    ListItemComponent,
    PageErrorComponent,
    PhonePipe,
    RealPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgbModule
  ],
  exports: [
    NavbarComponent,
    ListItemComponent,
    PageErrorComponent
  ]
})
export class SharedModule { }
