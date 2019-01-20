import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  exports: [
    NavBarComponent,
    FooterComponent
  ],
  declarations: [
    NavBarComponent,
    FooterComponent
  ]
})
export class ComponentsModule {}
