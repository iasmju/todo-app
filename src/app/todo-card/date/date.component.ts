import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
})
export class DateComponent implements OnInit {
  @Input() lang: string;


  date = new Date();


  constructor() {
  }

  ngOnInit(): void {
  }


}
