import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import {SearchResult} from './search-result';
import {YOUTUBE_API_KEY, YOUTUBE_API_URL} from './you-tube-search-injectables.enum';

@Injectable()
export class YouTubeSearchService {

  private apiKey = YOUTUBE_API_KEY;
  private apiUrl = YOUTUBE_API_URL;

  constructor(private http: Http) {
  }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      'q=${' + query + '}',
      'key=' + this.apiKey,
      'part=snippet',
      'type=video',
      'maxResults=10'].join('&');
    const queryUrl = this.apiUrl + '?$' + params;
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
