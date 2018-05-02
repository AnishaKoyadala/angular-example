import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPanelNavbarComponent } from './main-panel-navbar.component';

describe('MainPanelNavbarComponent', () => {
  let component: MainPanelNavbarComponent;
  let fixture: ComponentFixture<MainPanelNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPanelNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPanelNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
