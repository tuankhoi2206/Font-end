import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppComponent} from './app.component';
import {SimpleHttpComponent} from './simple-http/simple-http.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {YouTubeSearchComponent} from './you-tube-search/you-tube-search.component';
import {YouTubeSearchInjectables} from './you-tube-search/you-tube-search-injectables.enum';
import { SearchBoxComponentComponent } from './search-box-component/search-box-component.component';
import { YouTubeSearchComponentComponent } from './you-tube-search-component/you-tube-search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    SearchResultComponent,
    YouTubeSearchComponent,
    SearchBoxComponentComponent,
    YouTubeSearchComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [YouTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule {
}
