import { TestBed } from '@angular/core/testing';

import { MyTestService } from './my-test.service';

describe('MyTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyTestService = TestBed.get(MyTestService);
    expect(service).toBeTruthy();
  });
});
