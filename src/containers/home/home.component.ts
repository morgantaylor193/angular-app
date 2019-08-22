import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public firstFloor = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  async signIn(): Promise<void> {
    await this.authService.signIn();
  }

  public displayFloor(floor){
    if(floor === 1){
      this.firstFloor = true;
    }
    else if(floor === 2){
      this.firstFloor = false;
    }
  }
}
