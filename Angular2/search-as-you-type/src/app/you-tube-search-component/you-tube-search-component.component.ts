import {Component, OnInit} from '@angular/core';
import {SearchResult} from '../you-tube-search/search-result';

@Component({
  selector: 'app-you-tube-search-component',
  templateUrl: './you-tube-search-component.component.html',
  styleUrls: ['./you-tube-search-component.component.css']
})
export class YouTubeSearchComponentComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor() {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }

  ngOnInit() {
  }

}
