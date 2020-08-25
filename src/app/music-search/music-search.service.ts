import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class MusicSearchService {

  albums = []

  constructor(private http: Http) {

  }

  search(query, callback) {
    let url = `https://api.spotify.com/v1/search?q=${query}&type=album`;

    this.http.get(url).subscribe((respone: Response) => {
      let data = respone.json();
      let albums = data.albums.items;
      this.albums = albums;
      callback(albums);
    })
  }

  getAlbums(callback) {
    let query = 'batman';
    this.search(query, callback);
  }

}
