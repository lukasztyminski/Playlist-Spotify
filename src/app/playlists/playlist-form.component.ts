import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'playlist-form',
  templateUrl: './playlist-form.component.html',
  styles: [`
    input.ng-dirty.ng-invalid, textarea.ng-dirty.ng-invalid,
    input.ng-touched.ng-invalid, textarea.ng-touched.ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class PlaylistFormComponent implements OnInit {

  playlist;

  categories = [
    'Filmowa',
    'Rockowa',
    'Inne'
  ]

  save(valid, playlist) {
    if (!valid) {
      return;
    }
    this.playlistsService.savePlaylist(playlist);
    this.router.navigate(['playlists', playlist.id])
  }

  constructor(private activeRoute: ActivatedRoute, private playlistsService: PlaylistsService, private router: Router) {
    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (id) {
        let playlist = this.playlistsService.getPlaylist(id);
        this.playlist = Object.assign({}, playlist);
      } else {
        this.playlist = this.playlistsService.createPlaylist();
      }
    })
  }

  ngOnInit() {
  }

}
