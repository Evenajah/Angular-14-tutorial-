import { Component, OnInit } from '@angular/core';
import { ShareModule } from '../../../../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ShareModule],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
