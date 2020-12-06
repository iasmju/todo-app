import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
})
export class DateComponent implements OnInit {
  @Input() language: string;


  date = new Date();
  month;
  day;



  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getDate(changes.language.currentValue);
  }

  getDate(lang: string) {
    if (lang === 'ar') {
      this.arabicDate();
    }
    else {
      this.month = this.date.toLocaleString('default', { month: 'short' })
      this.day = this.date.toLocaleDateString('default', { weekday: 'long' });
    }
  }

  arabicDate() {
    var months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
      "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    var days = ["اﻷحد", "والإثنين", "الثلاثاء", "اﻷربعاء", "الخميس", "الجمعة", "السبت"];
    this.month = months[this.date.getMonth()];
    this.day = days[this.date.getDay()];
  }

}
