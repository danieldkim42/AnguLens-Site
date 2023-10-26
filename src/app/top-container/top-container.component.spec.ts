import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopContainerComponent } from './top-container.component';

describe('TopContainerComponent', () => {
  let component: TopContainerComponent;
  let fixture: ComponentFixture<TopContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopContainerComponent]
    });
    fixture = TestBed.createComponent(TopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
