import { Component } from '@angular/core';
import { Container } from '../../layout/container/container';
import { RoadmapForm } from '../../roadmap/roadmap-form/roadmap-form';

@Component({
  selector: 'app-home',
  imports: [Container, RoadmapForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
