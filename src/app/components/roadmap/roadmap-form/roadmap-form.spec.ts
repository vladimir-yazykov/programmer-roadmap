import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapForm } from './roadmap-form';

describe('RoadmapForm', () => {
  let component: RoadmapForm;
  let fixture: ComponentFixture<RoadmapForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
