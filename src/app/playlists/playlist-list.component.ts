import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-list',
  template: `
     <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Nazwa</th>
          <th>Utworów</th>
          <th>Ulubiona</th>
        </tr>
      </thead>
      <tbody>
        <tr
          *ngFor="let playlist of playlists; let i = index"
          class="playlist-row"
          [ngClass]="{'table-active': selected == playlist}"
          [ngStyle]="{
            borderBottomColor: playlist.color
          }"
          (click)="select(playlist)"
        >
          <td>{{ i + 1 }}</td>
          <td>{{ playlist.name }}</td>
          <td>{{ playlist.tracks }}</td>
          <td>{{ convertBooleanToString(playlist.favorite) }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    .playlist-row {
      border-bottom: 2px solid transparent;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
  `]
})


export class PlaylistListComponent implements OnInit {


  convertBooleanToString = (boolean) => boolean ? 'Tak' : 'Nie';

  @Output('selected')
  onSelected = new EventEmitter()

  @Input()
  playlists;

  @Input()
  selected;

  select(playlist) {
    this.onSelected.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
