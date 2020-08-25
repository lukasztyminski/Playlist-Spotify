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

  selected = null;

  mode = 'none';

  edited = {
  };

  playlists = [];

  constructor(private playlistService: PlaylistsService) {
    console.log('PlaylistService', this);
  }

  ngOnInit() {
    this.playlists = this.playlistService.getPlaylists();
  }

  select(playlist) {
    this.mode = 'selected';
    this.selected = playlist;
  }

  edit(playlist) {
    this.mode = 'edit';
    this.edited = Object.assign({}, playlist);
    this.selected = playlist;
  }

  createNew() {
    this.mode = 'edit';
    let newPlaylist = this.playlistService.createPlaylist();
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }

  save(playlist) {
    this.playlistService.savePlaylist(playlist);
  }


}
