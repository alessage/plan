import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvocebilancioComponent } from './newvocebilancio.component';

describe('NewvocebilancioComponent', () => {
  let component: NewvocebilancioComponent;
  let fixture: ComponentFixture<NewvocebilancioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewvocebilancioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvocebilancioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
