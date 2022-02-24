import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  items = [
    {
      img: './assets/cloud.png',
      title: 'DUMMY.LOGO'
    },
    {
      img: './assets/glass.png',
      title: 'Random.LOGO'
    },
    {
      img: './assets/settings.png',
      title: 'Construction'
    },
    {
      img: './assets/support.png',
      title: 'Random Brand'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
