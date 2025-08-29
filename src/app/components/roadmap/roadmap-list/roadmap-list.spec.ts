import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapList } from './roadmap-list';

describe('RoadmapList', () => {
  let component: RoadmapList;
  let fixture: ComponentFixture<RoadmapList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
