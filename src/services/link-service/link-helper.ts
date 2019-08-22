import { Injectable } from '@angular/core';

@Injectable()

export class LinkHelper {
	public homePage() {
		return '';
  }
  
	public loginPage() {
		return '/login';
	}
}
