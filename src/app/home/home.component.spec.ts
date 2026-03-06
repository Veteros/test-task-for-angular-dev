import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from '@core';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [HomeComponent],
      providers: [QuoteService, provideHttpClient, provideHttpClientTesting],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
