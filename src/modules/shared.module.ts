import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppHeader } from 'src/components/header/header';
import { AppFooter } from 'src/components/footer/footer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { LinkHelper } from 'src/services/linkHelper';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    AppHeader,
    AppFooter,
  ],
  exports: [
    AppHeader,
    AppFooter,
  ],
  providers: [
    // LinkHelper
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
