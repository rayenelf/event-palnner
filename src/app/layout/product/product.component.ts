import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
title="MRF"
 searchText: string = '';
 searchText1="";
 selectProtect:string;

listproduct:Product[]=[]

selectedProductType: string = '';
  constructor() { }

  ngOnInit(): void {
    //  this.listproduct = [
    //   { id: 1, name: 'Laptop', price: 1200, description: 'Good laptop',like:1,quntity:5,fedi:52552 },
    //   { id: 2, name: 'Phone', price: 450, description: 'Smart phone',like:2,quntity:3 ,fedi:52552},
    //   { id: 3, name: 'Mouse', price: 25, description: 'Wireless mouse',like:1,quntity:5 ,fedi:52552}
    // ];
  }
  


  trackById(index: number, item: Product) {
    return item.id;
  }


  ajouter1(Id1:number){
const y = this.listproduct.find(e => e.id == Id1);
if(y && y.quntity>0){
  y.quntity-=1;
 
}

  }

  
  ajouter(productId: number){
      
    const item = this.listproduct.find(p => p.id === productId);
    if (item && item.quntity > 0) {
      item.quntity -= 1;
      alert(item.quntity)
    }else
    {
      alert('error')
    }
  
  }

   get filteredCart() {
    
    return this.listproduct.filter(p =>
    Object.values(p).some(val =>
      String(val).includes(this.searchText)
    )
  );
  }

  get cart(){
    return this.listproduct.filter(p=>
      p.name.includes(this.searchText1)||
      p.description.includes(this.searchText1)
    )
  }
}
