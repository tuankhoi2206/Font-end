import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import {SearchResult} from './search-result';

@Injectable()
export class YouTubeSearchService {
  constructor(private http: Http,
              @Inject(this.YOUTUBE_API_KEY)
              private apiKey: string,
              @Inject(this.YOUTUBE_API_URL)
              private apiUrl: string) {
  }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      'q=${' + query + '}',
      'key=${' + this.apiKey + '}',
      'part=snippet',
      'type=video',
      'maxResults=10'].join('&');

    const queryUrl = '${' + this.apiUrl + '}?${' + params + '}';
    return this.http.get(queryUrl).map((response: Response) => {
      return (<any>response.json()).items.map(item => {
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });
      });
    });
  }
}
