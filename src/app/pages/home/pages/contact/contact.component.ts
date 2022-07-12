import { Component, OnInit } from '@angular/core';
import { ShareModule } from '../../../../../../shared';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [ShareModule],
  standalone: true,
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
