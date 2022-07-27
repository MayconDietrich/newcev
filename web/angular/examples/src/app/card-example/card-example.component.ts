import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.css']
})
export class CardExampleComponent implements OnInit {
  fullName: string = 'Maycon'
  bio: string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo enim illum veniam reprehenderit, nesciunt reiciendis perferendis molestias voluptatem, neque aliquid voluptates distinctio adipisci totam velit quaerat? Sit perspiciatis dolores sapiente?'

  students: string[] = ['maycon', 'little', 'ergui']
  constructor() { }

  ngOnInit(): void {
  }

}

