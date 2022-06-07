import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App } from './app';
import { AppRoutingModule } from './app-routing.module';
import { ChildPageModule } from '../containers/child/child.module';
import { HomePageModule } from '../containers/home/home.module';

@NgModule({
  declarations: [App],
  imports: [AppRoutingModule, BrowserModule, ChildPageModule, HomePageModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
