import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { NgOptimizedImage } from '@angular/common';
import { TranslateDirective } from '@ngx-translate/core';
import { LoaderComponent } from '@my-org/shared-ui';

@Component({
  selector:    'app-home',
  templateUrl: './home.component.html',
  styleUrls:   ['./home.component.scss'],
  imports:     [NgOptimizedImage, TranslateDirective, LoaderComponent],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
