import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-detail',
  template: `
    <p class="card-text">Wybrana Playlista</p>
    <div class="form-group">
      <button
        class="btn btn-default float-sm-right"
        (click)="edit(playlist)"
      >
        Edytuj
      </button>
          </div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  @Input()
  playlist;

  @Output('editplaylist')
  onEdited = new EventEmitter;


  edit(playlist) {
    this.onEdited.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
