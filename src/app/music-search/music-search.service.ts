import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MusicSearchService {

  albums = []

  albumsStream = new Subject();

  constructor(private http: Http) {
    this.search('batman');
  }

  getAlbumsStream() {
    return Observable.from(this.albumsStream)
  }

  search(query) {
    let url = `https://api.spotify.com/v1/search?q=${query}&type=album`;

    this.http.get(url).subscribe((response: Response) => {
      let data = response.json();
      let albums = data.albums.items;
      this.albums = albums;

      this.albumsStream.next(this.albums);
    });
  }


}
