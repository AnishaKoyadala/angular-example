import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .active   {
      color: #FFF !important;
    }
  `]
})
export class AppComponent {
  title = 'travel-desk';
}
