import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showForm = false;
  polls = [
    {
      question: 'Do you like cat or dogs?',
      votes: [0, 4, 2],
      voted: true,
      thumbnail: 'http://placekitten.com/240/180',
    },
    {
      question: 'Favourite vacation place?',
      votes: [1, 0, 8],
      voted: false,
      thumbnail: 'http://placekitten.com/239/180',
    },
  ];
}
