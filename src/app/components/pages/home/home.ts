import { Component, inject } from '@angular/core';
import { Container } from '../../layout/container/container';
import { RoadmapForm, RoadmapFormSubmitData } from '../../roadmap/roadmap-form/roadmap-form';
import { RoadmapList } from '../../roadmap/roadmap-list/roadmap-list';
import { HttpClient } from '@angular/common/http';
import { RoadmapItem } from '../../../models/roadmap-item.model';

@Component({
  selector: 'app-home',
  imports: [Container, RoadmapForm, RoadmapList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private http = inject(HttpClient);
  data: RoadmapItem[] = [];

  setData = (response: RoadmapItem[]) => {
    this.data = response;
  };

  ngOnInit() {
    this.http.get<RoadmapItem[]>('http://localhost:3000/').subscribe(this.setData);
  }

  addItem(event: RoadmapFormSubmitData) {
    this.http.post<RoadmapItem[]>('http://localhost:3000/', event).subscribe(this.setData);
  }

  removeStep(id: string) {
    this.http.delete<RoadmapItem[]>(`http://localhost:3000/${id}`).subscribe(this.setData);
  }
}
