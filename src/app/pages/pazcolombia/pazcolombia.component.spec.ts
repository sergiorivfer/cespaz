import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PazcolombiaComponent } from './pazcolombia.component';

describe('PazcolombiaComponent', () => {
  let component: PazcolombiaComponent;
  let fixture: ComponentFixture<PazcolombiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PazcolombiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PazcolombiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
