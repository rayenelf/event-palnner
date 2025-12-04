import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesteventComponent } from './bestevent.component';

describe('BesteventComponent', () => {
  let component: BesteventComponent;
  let fixture: ComponentFixture<BesteventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesteventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BesteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
