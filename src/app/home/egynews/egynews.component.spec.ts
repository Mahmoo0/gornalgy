import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgynewsComponent } from './egynews.component';

describe('EgynewsComponent', () => {
  let component: EgynewsComponent;
  let fixture: ComponentFixture<EgynewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgynewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
