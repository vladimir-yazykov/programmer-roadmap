import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { roadmapListData } from './roadmap-list.data';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { RoadmapItem } from '../../../models/roadmap-item.model';
@Component({
  selector: 'app-roadmap-list',
  imports: [MatStepperModule, MatButtonModule],
  templateUrl: './roadmap-list.html',
  styleUrl: './roadmap-list.scss',
})
export class RoadmapList {
  private http = inject(HttpClient);
  data: RoadmapItem[] = [];

  ngOnInit() {
    this.http.get<RoadmapItem[]>('http://localhost:3000/').subscribe((response) => {
      this.data = response;
    });
  }
}
