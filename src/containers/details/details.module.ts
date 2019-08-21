import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsPage } from './details';
import { SharedModule } from 'src/modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DetailsPage
      }
    ])
  ],
  declarations: [
    DetailsPage
  ],
  providers: [],
  exports: [DetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DetailsPageModule {}