import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvprogrammesIndexComponent } from './tvprogrammes-index.component';

describe('TvprogrammesIndexComponent', () => {
  let component: TvprogrammesIndexComponent;
  let fixture: ComponentFixture<TvprogrammesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvprogrammesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvprogrammesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
