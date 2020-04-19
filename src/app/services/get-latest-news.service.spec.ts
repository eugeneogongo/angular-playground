import {TestBed} from '@angular/core/testing';

import {GetLatestNewsService} from './get-latest-news.service';

describe('GetLatestNewsService', () => {
  let service: GetLatestNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLatestNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
