import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout-body',
  templateUrl: './layout-body.component.html',
  styleUrls: ['./layout-body.component.css']
})
export class LayoutBodyComponent implements OnInit {
  @Input() fullNameParam: string[] = [];
  @Input() bioParam: string = '';
  @Input() youtubeParam: string = '';
  @Input() googleParam: string = '';
  @Input() subtitleParam: string = '';

  color: string = '#000';

  canView: boolean = true;
  author: string = 'filipe';

  addNameOnList: any;
  remove: any;
  list: string[] = [];
  constructor() {
    this.addNameOnList = () => {
      this.list.push('little')
      console.log('bsvds', this.list);
    }
  }

  ngOnInit(): void {
    let nota = 6;

    if (nota < 6) {
      this.color = 'red'
    } else if (nota === 6) {
      this.color = 'yellow'
    } else {
      this.color = 'greeen'
    }
    console.log('ng init do card')
  }

}
