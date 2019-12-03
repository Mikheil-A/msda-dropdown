import { TestBed } from '@angular/core/testing';

import { MsdaDropdownLibService } from './msda-dropdown-lib.service';

describe('MsdaDropdownLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MsdaDropdownLibService = TestBed.get(MsdaDropdownLibService);
    expect(service).toBeTruthy();
  });
});
