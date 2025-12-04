import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivinformComponent } from './drivinform.component';

describe('DrivinformComponent', () => {
  let component: DrivinformComponent;
  let fixture: ComponentFixture<DrivinformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivinformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivinformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
