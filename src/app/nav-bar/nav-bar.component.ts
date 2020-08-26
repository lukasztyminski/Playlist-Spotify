import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
          <h3>
          <a routerLink="/" class="navbar-brand">Spotify APP</a>
        </h3>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLinkActive="active" routerLink="/music">Szukaj muzyki <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLinkActive="active" routerLink="/playlists">Twoje playlisty</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
