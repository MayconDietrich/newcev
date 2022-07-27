import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullNameParam: string[] = ['Maycon', 'Little', 'Ergui']
  bioParam: string = 'dsijklgbvdoasgvbsalkufhewaofvadsabfadsyukfv fdsfuivdskjfh'
  youtubeParam: string = 'https://youtube.com'
  googleParam: string = 'https://google.com'
  subtitleParam: string = 'Subtitle'
}
