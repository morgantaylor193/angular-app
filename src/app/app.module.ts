import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/routes/routes';
import { SharedModule } from 'src/modules/shared.module';
import { MsalModule } from '@azure/msal-angular';

import { OAuthSettings } from './app.constants';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/services/authguard/authguard';
import { ActiveRoom } from 'src/services/activeRoom/active-room';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot({
      clientID: OAuthSettings.appId,
      authority: OAuthSettings.authority,
    }),
    SharedModule,
    RouterModule
  ],
  providers: [AuthGuard, ActiveRoom],
  bootstrap: [AppComponent]
})

export class AppModule { }
