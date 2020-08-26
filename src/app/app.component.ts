import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-works',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'Playlists Spotify by TymonDev';

  constructor(private http: Http, private auth: AuthService) {

  }

}
