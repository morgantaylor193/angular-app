import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBase } from './app.component';
import { AppRoutingModule } from 'src/routes/routes';
import { SharedModule } from 'src/modules/shared.module';

@NgModule({
  declarations: [
    AppBase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppBase]
})

export class AppModule { }
