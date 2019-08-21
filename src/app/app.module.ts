import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBase } from './app.component';
import { AppRoutingModule } from 'src/routes/routes';

@NgModule({
  declarations: [
    AppBase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppBase]
})

export class AppModule { }
