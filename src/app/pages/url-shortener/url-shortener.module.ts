import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { UrlShortenerRoutingModule } from './url-shortener-routing.module';
import { UrlShortenerComponent } from './url-shortener.component';

@NgModule({
  declarations: [
    UrlShortenerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UrlShortenerRoutingModule
  ]
})
export class UrlShortenerModule { }
