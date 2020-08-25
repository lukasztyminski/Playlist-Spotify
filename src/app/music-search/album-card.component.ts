import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'album-card',
  template: `
    <img class="card-img-top" [src]="image.url" />
    <div class="card-img-overlay">
      <div class="card-body">
        <h5 class="card-title">{{album.name}}</h5>
      </div>
    </div>
  `,
  styles: [`
    :host() {
      flex: 0 0 31% !important;
      overflow: hidden;
      cursor: pointer;
      margin: 0 0 20px 0 !important;
    }

    :host():hover .card-img-overlay {
      top: 100%;
    }

    .card-img-overlay {
      background: rgba(0,0,0,.8);
      top: 70%;
      color: #fff;
      transition: .3s;
      font-size: 1em !important;
    }
  `]
})
export class AlbumCardComponent implements OnInit {

  @Input('album')
  set setAlbum(album) {
    this.album = album;
    this.image = album.images[0];
  }


  image;
  album;

  constructor() { }

  ngOnInit() {
  }

}
