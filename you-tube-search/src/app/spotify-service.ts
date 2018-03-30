import {Http} from "@angular/http";

export class SpotifyService {
  constructor(public http: Http) {
  }

  searchTrack(query: string) {
    let params: string = [
      'q=${query}',
      'type=track'
    ].join('&');
    let queryURL: string = 'https://api.spotify.com/v1/search?${params}';
    return this.http.request(queryURL).map(res => res.join());
  }
}
