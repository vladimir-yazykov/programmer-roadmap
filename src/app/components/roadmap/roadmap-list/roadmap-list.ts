import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { RoadmapItem } from '../../../models/roadmap-item.model';
@Component({
  selector: 'app-roadmap-list',
  imports: [MatStepperModule, MatButtonModule],
  templateUrl: './roadmap-list.html',
  styleUrl: './roadmap-list.scss',
})
export class RoadmapList {
  @Input()
  data: RoadmapItem[] = [];

  @Output()
  stepRemoved = new EventEmitter<string>();
}
