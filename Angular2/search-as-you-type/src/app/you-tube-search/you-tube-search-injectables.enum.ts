import {
  YouTubeSearchService
} from './you-tube-search-service';

export var YOUTUBE_API_KEY: string = 'AIzaSyAcFWMUsHcupBIuo7LcF_9g3K1vnuRIk_4';
export var YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

export const YouTubeSearchInjectables: Array<any> = [
  {provide: YouTubeSearchService, useClass: YouTubeSearchService},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];
