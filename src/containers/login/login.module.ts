import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login';
// import { SharedModule } from 'modules/shared.module';

@NgModule({
  imports: [
    // SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LoginPage
      }
    ])
  ],
  declarations: [
    LoginPage,
  ],
  providers: [],
  exports: [LoginPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginPageModule {}