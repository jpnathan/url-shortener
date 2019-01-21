import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HttpServiceModule
} from './http/http.service.module';

@NgModule({
  imports: [
    CommonModule,
    HttpServiceModule.forRoot()
  ]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule
    };
  }
}
