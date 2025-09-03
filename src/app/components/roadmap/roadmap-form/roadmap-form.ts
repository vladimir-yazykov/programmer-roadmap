import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RoadmapItem } from '../../../models/roadmap-item.model';

export type RoadmapFormSubmitData = Omit<RoadmapItem, 'id'>;

@Component({
  selector: 'app-roadmap-form',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
  templateUrl: './roadmap-form.html',
  styleUrl: './roadmap-form.scss',
})
export class RoadmapForm {
  title = '';
  position = 1;
  url = '';
  description = '';

  @Output()
  submit = new EventEmitter<RoadmapFormSubmitData>();

  submitForm() {
    const body = {
      title: this.title,
      position: this.position,
      url: this.url,
      description: this.description,
    };

    this.submit.emit(body);
  }
}
