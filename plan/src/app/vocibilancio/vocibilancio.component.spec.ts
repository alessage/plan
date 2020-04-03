import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocibilancioComponent } from './vocibilancio.component';

describe('VocibilancioComponent', () => {
  let component: VocibilancioComponent;
  let fixture: ComponentFixture<VocibilancioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocibilancioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocibilancioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
