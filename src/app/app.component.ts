import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peppa';

  constructor(private auth :AuthService,private router:Router ) {}

  isLogged() {
    return this.auth.IsLoggedIn();
  }
}
