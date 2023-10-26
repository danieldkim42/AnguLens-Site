import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialContainerComponent } from './tutorial-container.component';

describe('TutorialContainerComponent', () => {
  let component: TutorialContainerComponent;
  let fixture: ComponentFixture<TutorialContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialContainerComponent]
    });
    fixture = TestBed.createComponent(TutorialContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
