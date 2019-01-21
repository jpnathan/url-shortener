import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  UrlShortenerHttpService
} from './url-shortener/url-shortener.http.service';

@NgModule({
  providers: [
    UrlShortenerHttpService
  ]
})
export class HttpServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpServiceModule
    };
  }
}
