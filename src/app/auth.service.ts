import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private baseOptions: RequestOptions) { }

  getToken() {
    let token = localStorage.getItem('token');

    if (!token) {
      const match = window.location.hash.match(/#access_token=(.*?)&/);
      token = match && match[1];
      localStorage.setItem('token', token);

    }

    if (!token) {
      this.authorize();
    }

    this.baseOptions.headers.set('Authorization', 'Bearer ' + token);

    return token;
  }

  authorize() {
    localStorage.removeItem('token');

    const client_id = 'aa95335065d24db780b05135cad27929';
    const redirect_uri = 'http://localhost:4200/';

    window.location.replace(`https://accounts.spotify.com/pl/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`);
  }

}
