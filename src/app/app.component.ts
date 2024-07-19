// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get('example-endpoint').subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error('Error fetching data from API:', error);
      }
    );
  }
}
