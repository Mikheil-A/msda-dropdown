import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaDropdownComponent } from './msda-dropdown.component';

describe('MsdaDropdownComponent', () => {
  let component: MsdaDropdownComponent;
  let fixture: ComponentFixture<MsdaDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
