import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchResult} from '../you-tube-search/search-result';
import {YouTubeSearchService} from '../you-tube-search/you-tube-search-service';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

/**
 * These are called decorator.
 */
@Component({
  selector: 'app-search-box-component',
  templateUrl: './search-box-component.component.html',
  styleUrls: ['./search-box-component.component.css']
})
/**
 * The SearchBoxComponent will:
 *  1. Watch for keyup on an input and submit a search to the YouTubeSearchService.
 *  2. Emit a loading event when we're loading( or not).
 *  3. Emit a results event when we have new results.
 */
export class SearchBoxComponentComponent implements OnInit {

  /**
   * Note: Output specify that events will be emitted ( phát ra) from this component.
   * @type {EventEmitter<boolean>}
   */
  @Output()
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService,
              private el: ElementRef) {}

  /**
   * This function will be help we initialize the component
   */
  ngOnInit() {
    /**
     * What is the purpose of this code
     */
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.next(true))
      .map((query: string) => this.youtube.search(query))
      .switch().subscribe((results: SearchResult[]) => {
      this.loading.next(false);
      this.results.next(results);
    }, (err: any) => {
      console.log(err);
      this.loading.next(false);
    }, () => {
      this.loading.next(false);
    });
  }

}
