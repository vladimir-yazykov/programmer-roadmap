import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-roadmap-form',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './roadmap-form.html',
  styleUrl: './roadmap-form.scss',
})
export class RoadmapForm {}
