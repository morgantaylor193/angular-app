import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home';
import { SharedModule } from 'src/modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage
  ],
  providers: [],
  exports: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePageModule {}