import { Injectable, Inject, Optional } from '@angular/core';

@Injectable()
export class PlaylistsService {

  playlists = [];

  getPlaylists() {
    return this.playlists;
  }

  getPlaylist(id) {
    return this.playlists.find(playlist => playlist.id === id);
  }

  savePlaylist(playlist) {
    if (playlist.id) {
      let index = this.playlists.findIndex((oldPlaylist) => (
        oldPlaylist.id === playlist.id
      ));
      this.playlists.splice(index, 1, playlist);
    } else {
      playlist.id = Date.now();
      this.playlists.push(playlist);
    }
  }

  createPlaylist() {
    let newPlaylist = {
      name: '',
      tracks: 0,
      color: 'black',
      favorite: false,
    };
    return Object.assign({}, newPlaylist);
  }

  constructor(@Optional() @Inject('PlaylistsData') playlistsData) {

    this.playlists = playlistsData === null ? this.playlists : playlistsData;
  }

}
