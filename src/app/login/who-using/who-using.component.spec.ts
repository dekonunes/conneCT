import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoUsingComponent } from './who-using.component';

describe('WhoUsingComponent', () => {
  let component: WhoUsingComponent;
  let fixture: ComponentFixture<WhoUsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoUsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoUsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
