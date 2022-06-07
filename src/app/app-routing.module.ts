import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Child } from '../containers/child/child';
import { Home } from '../containers/home/home';

const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'child', component: Child, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
