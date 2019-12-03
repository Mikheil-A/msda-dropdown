import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaDropdownLibComponent } from './msda-dropdown-lib.component';

describe('MsdaDropdownLibComponent', () => {
  let component: MsdaDropdownLibComponent;
  let fixture: ComponentFixture<MsdaDropdownLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaDropdownLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaDropdownLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
