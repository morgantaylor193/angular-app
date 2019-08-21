import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login';
import { SharedModule } from 'src/modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LoginPage
      }
    ])
  ],
  declarations: [
    LoginPage
  ],
  providers: [],
  exports: [LoginPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginPageModule {}