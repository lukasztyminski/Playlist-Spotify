import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from './playlists.service'
import playlistsData from './playlists.data';

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
  providers: [PlaylistsService, { provide: 'PlaylistsData', useValue: playlistsData }]
})
export class PlaylistsComponent implements OnInit {

  playlists = [];

  constructor(private playlistsService: PlaylistsService, private router: Router) {
  }

  ngOnInit() {
    this.playlists = this.playlistsService.getPlaylists();
  }

  createNew() {
    this.playlistsService.createPlaylist();
    this.router.navigate(['playlists', 'new'])
  }


}
