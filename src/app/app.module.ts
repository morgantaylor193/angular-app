import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/routes/routes';
import { SharedModule } from 'src/modules/shared.module';
import { MsalModule } from '@azure/msal-angular';

import { OAuthSettings } from './app.constants';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot({
      clientID: OAuthSettings.appId
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

/*import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AlertsComponent } from './alerts/alerts.component';
import { OAuthSettings } from '../oauth';
import { CalendarComponent } from './calendar/calendar.component';*/
