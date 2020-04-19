import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectedNewsComponent} from './selected-news.component';

describe('SelectedNewsComponent', () => {
  let component: SelectedNewsComponent;
  let fixture: ComponentFixture<SelectedNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedNewsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
