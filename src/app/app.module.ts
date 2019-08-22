import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBase } from './app.component';
import { AppRoutingModule } from 'src/routes/routes';
import { SharedModule } from 'src/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/services/authguard/authguard';

@NgModule({
  declarations: [
    AppBase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppBase]
})

export class AppModule { }
