import { Component, OnInit } from '@angular/core';

import { ItemService } from './item.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  providers: [ItemService]
})
export class MarketComponent implements OnInit {
  constructor() { }

  ngOnInit(){
  }

}
