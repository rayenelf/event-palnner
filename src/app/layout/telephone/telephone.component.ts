import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements OnInit {
selectProtect:string;
 listProducts: Product[] = [];
  searchTerm: string = '';
  constructor() { }

  ngOnInit(): void {
    this.listProducts = [
          {id: 1, name: 'iphone A', price: 100, description: 'Description of Product A', quntity: 10, like: 0, image: 'https://m.media-amazon.com/images/I/61-MT8AQAPL._AC_UF894,1000_QL80_.jpg'},
          {id: 2, name: 'iphone B', price: 200, description: 'Description of Product B', quntity: 5, like: 0, image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF894,1000_QL80_.jpg'},
          {id: 3, name: 'iphone C', price: 300, description: 'Description of Product C', quntity: 0, like: 0, image: 'https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UF894,1000_QL80_.jpg'}
        ]
  }
buy(p:Product){

    p.quntity--;
  }

  afterRecieveData(p:any){
    // p.quantity--
    let index = this.listProducts.indexOf(p)
    this.listProducts[index].quntity--
  }
}
