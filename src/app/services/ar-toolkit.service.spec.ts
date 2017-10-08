import { TestBed, inject } from '@angular/core/testing';

import { ArToolkitService } from './ar-toolkit.service';

describe('ArToolkitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArToolkitService]
    });
  });

  it('should be created', inject([ArToolkitService], (service: ArToolkitService) => {
    expect(service).toBeTruthy();
  }));
});
