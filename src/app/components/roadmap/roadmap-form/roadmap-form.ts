import { Component, inject, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roadmap-form',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
  templateUrl: './roadmap-form.html',
  styleUrl: './roadmap-form.scss',
})
export class RoadmapForm {
  private http = inject(HttpClient);

  @Input()
  title = '';
  @Input()
  position = 1;
  @Input()
  url = '';
  @Input()
  description = '';

  submitForm() {
    const body = {
      title: this.title,
      position: this.position,
      url: this.url,
      description: this.description,
    };

    this.http.post('http://localhost:3000/', body).subscribe();
  }
}
