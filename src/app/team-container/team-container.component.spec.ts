import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamContainerComponent } from './team-container.component';

describe('TeamContainerComponent', () => {
  let component: TeamContainerComponent;
  let fixture: ComponentFixture<TeamContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamContainerComponent]
    });
    fixture = TestBed.createComponent(TeamContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
