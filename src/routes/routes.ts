import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	//Home Page
	{
		path: '',
		pathMatch: 'full',
		loadChildren: '../containers/home/home.module#HomePageModule'
  },
  {
		path: 'login',
		pathMatch: 'full',
		loadChildren: '../containers/login/login.module#LoginPageModule'
  },
  {
		path: 'room/:id',
		pathMatch: 'full',
		loadChildren: '../containers/details/details.module#DetailsPageModule'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
