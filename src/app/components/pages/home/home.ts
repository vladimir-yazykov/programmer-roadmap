import { Component } from '@angular/core';
import { Container } from '../../layout/container/container';
import { RoadmapForm } from '../../roadmap/roadmap-form/roadmap-form';
import { RoadmapList } from '../../roadmap/roadmap-list/roadmap-list';

@Component({
  selector: 'app-home',
  imports: [Container, RoadmapForm, RoadmapList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
