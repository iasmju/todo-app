import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todo-app';
  language = 'eng'
  buttonText = 'عربي';
  direction = 'ltr'

  changeLanguage() {
    if (this.language === 'eng') {
      this.language = 'ar'
      this.direction = 'rtl'
      this.buttonText = 'English';

    }
    else {
      this.language = 'eng'
      this.direction = 'ltr'
      this.buttonText = 'عربي';

    }
  }
}
