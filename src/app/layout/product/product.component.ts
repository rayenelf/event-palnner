import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'] // ⚠️ styleUrl → styleUrls
})
export class ProductComponent implements OnInit {
  title: string;
  listProducts: Product[] = [];
  searchTerm: string = '';

  constructor() {}

  ngOnInit() {
    this.title = "This is Product Page";
    this.listProducts = [
      { id: 1, name: "Laptop", price: 1200, description: "High performance laptop", quantity: 5 },
      { id: 2, name: "Phone", price: 800, description: "Latest smartphone with great camera", quantity: 10 },
      { id: 3, name: "Tablet", price: 600, description: "Lightweight tablet for daily use", quantity: 7 },
      { id: 4, name: "Headphones", price: 150, description: "Noise-cancelling wireless headphones", quantity: 15 }
    ];
  }

  buy(p: Product) {

    if (p.quantity > 0) {
      p.quantity--;
      alert("You bought: " + p.name);
    } else {
      alert("Out of stock!");
    }
  }
}
