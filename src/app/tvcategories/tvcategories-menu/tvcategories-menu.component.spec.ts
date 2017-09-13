import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvcategoriesMenuComponent } from './tvcategories-menu.component';

describe('TvcategoriesMenuComponent', () => {
  let component: TvcategoriesMenuComponent;
  let fixture: ComponentFixture<TvcategoriesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvcategoriesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvcategoriesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
