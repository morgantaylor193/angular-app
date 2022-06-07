import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Child } from './child';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: Child,
      },
    ]),
  ],
  declarations: [Child],
  exports: [Child],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChildPageModule {}
