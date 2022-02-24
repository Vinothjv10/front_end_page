import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  card_details = [
    {
      image: './assets/finance.png',
      title: 'Financial Consuling',
      para: 'At Honeycomb, we strive to be a product driven company focusing on developing unique products which brings great value to customers',
    },
    {
      image: './assets/market.png',
      title: 'Content Marketing',
      para: 'At Honeycomb, we strive to be a product driven company focusing on developing unique products which brings great value to customers',
    },
    {
      image: './assets/finance_care.png',
      title: 'Finance Advice',
      para: 'At Honeycomb, we strive to be a product driven company focusing on developing unique products which brings great value to customers',
    },

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
