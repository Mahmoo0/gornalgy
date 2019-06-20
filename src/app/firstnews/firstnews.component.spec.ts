import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstnewsComponent } from './firstnews.component';

describe('FirstnewsComponent', () => {
  let component: FirstnewsComponent;
  let fixture: ComponentFixture<FirstnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
