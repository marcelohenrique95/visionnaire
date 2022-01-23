import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './module/home/home.module';
import { ListPhonesModule } from './module/list-phones/list-phones.module';
import { PhoneService } from './service/phone.service';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HomeModule,
    ListPhonesModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [
    PhoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
