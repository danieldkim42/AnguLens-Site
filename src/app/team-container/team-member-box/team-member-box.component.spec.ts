import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberBoxComponent } from './team-member-box.component';

describe('TeamMemberBoxComponent', () => {
  let component: TeamMemberBoxComponent;
  let fixture: ComponentFixture<TeamMemberBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMemberBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMemberBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
