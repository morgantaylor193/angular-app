import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppHeader } from 'src/components/header/header';
import { AppFooter } from 'src/components/footer/footer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LinkHelper } from 'src/services/link-service/link-helper';
import { HomeOfficeMap } from 'src/components/home-office-map/home-office-map';
import { RoomCard } from 'src/components/room-card/room-card';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [
    AppHeader,
    AppFooter,
    HomeOfficeMap,
    RoomCard
  ],
  exports: [
    AppHeader,
    AppFooter,
    HomeOfficeMap,
    RoomCard
  ],
  providers: [
    LinkHelper
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
