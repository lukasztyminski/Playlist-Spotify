import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
   <div class="card-body">
      <div class="form-group">
        <label>Nazwa:</label>
        <input
          type="text"
          [(ngModel)]="playlist.name"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>Tracks:</label>
        <input
          type="text"
          [value]="playlist.tracks + ' utworów'"
          disabled
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>Kolor:</label>
        <input type="color" [(ngModel)]="playlist.color" />
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" [(ngModel)]="playlist.favorite" />
          Ulubiona</label
        >
      </div>

      <div class="form-group">
        <button
          class="btn btn-success float-sm-right"
          (click)="save(playlist)"
        >
          Zapisz
        </button>
      </div>
    </div>

  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Output('saved')
  onSave = new EventEmitter;

  @Input()
  playlist;

  save(event) {
    this.onSave.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
