import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'playlist-detail',
  template: `
  <div *ngIf="!playlist">
    <p>Wybierz <b>Playlistę</b>!</p>
  </div>
  <div *ngIf="playlist">
    <p class="card-text">{{playlist.name}}</p>
    <div class="form-group">
      <button
        class="btn btn-default float-sm-right"
        (click)="edit(playlist)"
      >
        Edytuj
      </button>
    </div>
   </div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  playlist;

  edit(playlist) {
    this.router.navigate(['playlists', playlist.id, 'edit'])
  }

  constructor(private activeRoute: ActivatedRoute, private playlistsService: PlaylistsService, private router: Router) {

    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (id) {
        this.playlist = this.playlistsService.getPlaylist(id);
      }
    })


  }

  ngOnInit() {
  }

}
