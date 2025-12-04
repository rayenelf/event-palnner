import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestevent',
  templateUrl: './bestevent.component.html',
  styleUrls: ['./bestevent.component.css']
})
export class BesteventComponent implements OnInit {
  @Input() bestEvents: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
