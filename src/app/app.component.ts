import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, VERSION } from '@angular/core';
import { onNavigationStart } from '../../routers-utils';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../shared';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ ShareModule],
  standalone: true,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {}
}
