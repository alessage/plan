import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocibilanciomasterComponent } from './vocibilanciomaster.component';

describe('VocibilanciomasterComponent', () => {
  let component: VocibilanciomasterComponent;
  let fixture: ComponentFixture<VocibilanciomasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocibilanciomasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocibilanciomasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
