import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { roadmapListData } from './roadmap-list.data';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-roadmap-list',
  imports: [MatStepperModule, MatButtonModule],
  templateUrl: './roadmap-list.html',
  styleUrl: './roadmap-list.scss',
})
export class RoadmapList {
  data = roadmapListData;
}
